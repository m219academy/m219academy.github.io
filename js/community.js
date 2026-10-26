import { db } from './firebase.js';
import { collection, documentId, query, orderBy, startAt, endAt, limit, getDocs, getDoc, doc } from 'https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js';

const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const clean = value => String(value || '').trim().toLowerCase().replace(/[^a-z0-9_]/g,'').slice(0,20);
const safeAvatar = value => typeof value === 'string' && /^data:image\/(?:jpeg|png|webp);base64,[a-z0-9+/=]+$/i.test(value) && value.length < 40000 ? value : '';
const avatar = user => {
  const image = safeAvatar(user.avatar);
  return image ? `<img class="community-avatar" src="${image}" alt="Profilbild von @${escapeHtml(user.username)}">`
    : `<span class="community-avatar community-initial">${escapeHtml(user.username?.slice(0,1).toUpperCase() || '?')}</span>`;
};
export function communityView(){
 return `<div class="eyebrow">LERNCOMMUNITY</div>
 <h1 class="h1">Lernende entdecken</h1>
 <p class="muted">Finde andere Lernende und entdecke ihre öffentlichen Profile. E-Mail-Adressen bleiben privat.</p>
 <section class="card community-search-card">
 <label for="communityQuery"><strong>Benutzername suchen</strong></label>
 <input id="communityQuery" class="community-search" type="search" maxlength="20" autocomplete="off" spellcheck="false" placeholder="z. B. tes..." aria-describedby="communityHint">
 <p id="communityHint" class="muted community-hint">Tippe mindestens 2 Zeichen. Treffer erscheinen automatisch.</p>
 <div id="communityResults" aria-live="polite"></div>
 </section>
 <div id="communityDialog" class="community-dialog-backdrop" hidden>
   <section class="community-dialog" role="dialog" aria-modal="true" aria-labelledby="communityDialogTitle" tabindex="-1">
     <button type="button" id="closeCommunityDialog" class="community-close" aria-label="Profil schliessen">×</button>
     <div id="communityDialogContent"></div>
   </section>
 </div>`;
}
export function bindCommunity(){
 const input=document.getElementById('communityQuery');
 const results=document.getElementById('communityResults');
 const backdrop=document.getElementById('communityDialog');
 const content=document.getElementById('communityDialogContent');
 const close=document.getElementById('closeCommunityDialog');
 if(!input || !results || !backdrop || !close) return;
 let timer, sequence=0, profiles=new Map(), lastFocus=null;
 const shut=()=>{backdrop.hidden=true;lastFocus?.focus();};
 close.onclick=shut;
 backdrop.onclick=e=>{if(e.target===backdrop)shut();};
 const keyHandler=e=>{if(e.key==='Escape'&&!backdrop.hidden){e.preventDefault();shut();}};
 document.addEventListener('keydown',keyHandler,{signal:(()=>{const controller=new AbortController(); const watcher=new MutationObserver(()=>{if(!input.isConnected){controller.abort();watcher.disconnect();}});watcher.observe(document.getElementById('content')||document.body,{childList:true,subtree:true});return controller.signal;})()});
 function renderProfiles(list){
   profiles=new Map(list.map(p=>[p.username,p]));
   if(!list.length){results.innerHTML='<p class="muted community-empty">Keine öffentlichen Profile gefunden.</p>';return;}
   results.innerHTML=`<p class="community-count">${list.length}${list.length===12?'+':''} Treffer</p><div class="community-result-list">${list.map(p=>`<button type="button" class="community-result-button" data-community-user="${escapeHtml(p.username)}">${avatar(p)}<span class="community-result-info"><strong>@${escapeHtml(p.username)}</strong><small>Level ${Number(p.level)||1} · ${Number(p.xp)||0} XP</small></span><span aria-hidden="true">›</span></button>`).join('')}</div>`;
   results.querySelectorAll('[data-community-user]').forEach(button=>{
      button.onclick=()=>{
       const p=profiles.get(button.dataset.communityUser);if(!p)return;
       lastFocus=button;
       content.innerHTML=`<div class="community-profile-head">${avatar(p)}<div><div class="eyebrow">ÖFFENTLICHES PROFIL</div><h2 id="communityDialogTitle">@${escapeHtml(p.username)}</h2><span class="community-level">Level ${Number(p.level)||1}</span></div></div><div class="community-profile-stats"><div><strong>${Number(p.xp)||0}</strong><span>Gesammelte XP</span></div><div><strong>${Number(p.level)||1}</strong><span>Level</span></div></div><div class="community-progress-label"><span>Fortschritt zum nächsten Level</span><strong>${(Number(p.xp)||0)%100}/100 XP</strong></div><div class="track"><div style="width:${(Number(p.xp)||0)%100}%"></div></div><p class="muted community-private-note">Nur freigegebene Profilinformationen werden angezeigt.</p>`;
       backdrop.hidden=false;backdrop.querySelector('.community-dialog').focus();
      };
   });
 }
 async function search(){
   const id=++sequence;
   const prefix=clean(input.value);
   if(prefix.length<2){results.innerHTML='';return;}
   results.innerHTML='<p class="muted community-empty">Profile werden gesucht …</p>';
   try {
     // Usernames are normalized lowercase document IDs. Query by prefix, then fetch only readable public profiles.
     const q=query(collection(db,'usernames'),orderBy(documentId()),startAt(prefix),endAt(prefix+'\uf8ff'),limit(12));
     const snapshot=await getDocs(q);
     const matches=await Promise.all(snapshot.docs.map(async d=>{
       try {
         const p=await getDoc(doc(db,'publicProfiles',d.data().uid));
         if(!p.exists())return null;
         const data=p.data();
         if(data.visible===false || data.username!==d.id)return null;
         return {username:d.id,avatar:safeAvatar(data.avatar),xp:Math.max(0,Number(data.xp)||0),level:Math.max(1,Number(data.level)||1)};
       } catch (err) {
         if(err.code==='permission-denied')return null; // Private profile.
         throw err;
       }
     }));
     if(id!==sequence || !input.isConnected)return;
     renderProfiles(matches.filter(Boolean));
   } catch(err){
     if(id!==sequence || !input.isConnected)return;
     console.error('Community search:',err);
     results.textContent='Suche derzeit nicht möglich. Bitte später erneut versuchen.';
   }
 }
 input.addEventListener('input',()=>{
   clearTimeout(timer);
   ++sequence;
   if(clean(input.value).length<2){results.innerHTML='';return;}
   timer=setTimeout(search,280);
 });
}

