import {db} from './firebase.js';
import {collection, getDocs} from 'https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js';
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function adminView(){return `<div class="eyebrow">NUR FÜR ADMINISTRATOREN</div><h1 class="h1">Admin Dashboard</h1><p class="muted">Lernfortschritt aller registrierten Personen. Zugriff nur für freigegebene Administratoren.</p><section class="card"><div id="adminContent" aria-live="polite">Benutzerdaten werden geladen…</div></section>`}
const prefixes=['lp1v7-0-','lp2v8-1-','lp3v9-2-','lp4v10-3-','lp5v11-4-'];
export async function loadAdminDashboard(target,paths){try{
 const snap=await getDocs(collection(db,'users'));
 const users=snap.docs.map(d=>({uid:d.id,...d.data()}));
 const total=paths.reduce((n,p)=>n+p.lessons.length,0);
 const rows=users.map(u=>{
  const done=new Set(Array.isArray(u.done)?u.done:[]);
  const quiz=new Set(Array.isArray(u.quiz)?u.quiz:[]);
  const counts=paths.map((p,i)=>p.lessons.filter((_,j)=>done.has(prefixes[i]+j)).length);
  const completed=counts.reduce((a,b)=>a+b,0);
  const finished=counts.every((n,i)=>n===paths[i].lessons.length)&&paths.every((p,i)=>quiz.has(prefixes[i]+(p.lessons.length-1)));
  return {...u,counts,completed,finished,percent:Math.round(completed/total*100),xp:done.size*25+quiz.size*10};
 });
 const graduates=rows.filter(r=>r.finished).length;
 const average=rows.length?Math.round(rows.reduce((s,r)=>s+r.percent,0)/rows.length):0;
 target.innerHTML=`<div class="stats"><div class="stat"><strong>${rows.length}</strong><span>Registrierte Nutzer</span></div><div class="stat"><strong>${graduates}</strong><span>Absolventen</span></div><div class="stat"><strong>${average}%</strong><span>Ø Lernfortschritt</span></div></div><div class="field"><label for="adminSearch">Benutzer suchen</label><input id="adminSearch" placeholder="Benutzername oder Name" autocomplete="off"></div><p class="muted" id="adminCount"></p><div id="adminRows"></div><div id="adminDetail"></div>`;
 const search=target.querySelector('#adminSearch'),results=target.querySelector('#adminRows'),detail=target.querySelector('#adminDetail'),count=target.querySelector('#adminCount');
 function detailView(r){detail.innerHTML=`<div class="card" style="margin-top:18px"><h3>${esc(r.name||r.username||'Lernende Person')}</h3><p class="muted">@${esc(r.username||'—')} · ${r.xp} XP · Level ${Math.floor(r.xp/100)+1}</p><p><strong>${r.completed}/${total}</strong> Lektionen · ${r.percent}% · ${r.finished?'Abgeschlossen':'In Bearbeitung'}</p>${paths.map((p,i)=>`<p><strong>LP${i+1}:</strong> ${esc(p.title)} · ${r.counts[i]}/${p.lessons.length} Lektionen</p>`).join('')}<p class="muted">Abschluss: ${r.completedAt?esc(new Date(r.completedAt).toLocaleDateString('de-CH')):'Noch nicht abgeschlossen'}</p></div>`;}
 function display(){const q=search.value.trim().toLowerCase();const items=rows.filter(r=>(r.username||'').toLowerCase().includes(q)||(r.name||'').toLowerCase().includes(q)).sort((a,b)=>b.percent-a.percent);count.textContent=`${items.length} Benutzer angezeigt`;
 results.innerHTML=`<div style="display:grid;gap:9px">${items.map(r=>`<button class="lesson-row" type="button" data-uid="${esc(r.uid)}" style="text-align:left"><span class="circle">${esc((r.name||r.username||'?').slice(0,1).toUpperCase())}</span><span class="grow"><strong>${esc(r.name||r.username||'Nutzer')}</strong><small>@${esc(r.username||'—')} · ${r.completed}/${total} Lektionen · ${r.xp} XP</small></span><span>${r.percent}% ${r.finished?'✓':''}</span></button>`).join('')||'<p class="muted">Keine Benutzer gefunden.</p>'}</div>`;
 results.querySelectorAll('[data-uid]').forEach(b=>b.onclick=()=>{const user=rows.find(x=>x.uid===b.dataset.uid);if(user)detailView(user)});
 }search.addEventListener('input',display);display();
 }catch(err){target.textContent='Benutzerdaten konnten nicht geladen werden: '+(err.code||err.message)+'. Prüfe die Firestore-Regeln und die Admin-Freigabe.';}}

