import {db} from './firebase.js';
import {doc,getDoc,runTransaction,setDoc,collection,query,where,getDocs} from 'https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js';
export const normalise = s => String(s||'').trim().toLowerCase();
export const validUsername = s => /^[a-z0-9_]{3,20}$/.test(normalise(s));
export const levelFor = xp => Math.floor(Math.max(0,xp)/100)+1;
export async function claimUsername(uid,raw,previous='') {
 const name=normalise(raw),old=normalise(previous);
 if(!validUsername(name)) throw new Error('3–20 Zeichen: Buchstaben, Zahlen und _.');
 if(name===old) return name;
 const target=doc(db,'usernames',name),oldRef=old?doc(db,'usernames',old):null;
 const existing=await getDoc(target);
 if(existing.exists()&&existing.data().uid!==uid)throw new Error('Dieser Benutzername ist bereits vergeben.');
 await runTransaction(db,async tx=>{
  const fresh=await tx.get(target);
  if(fresh.exists()&&fresh.data().uid!==uid)throw new Error('Dieser Benutzername ist bereits vergeben.');
  if(oldRef) {const previousSnap=await tx.get(oldRef);if(!previousSnap.exists()||previousSnap.data().uid!==uid)throw new Error('Alter Benutzername nicht gefunden.');}
  if(!fresh.exists())tx.set(target,{uid});
  if(oldRef)tx.delete(oldRef);
  tx.set(doc(db,'users',uid),{username:name},{merge:true});
 });
 return name;
}
export async function publishPublic(uid,username,xp,avatar){
 if(!username)return;
 await setDoc(doc(db,'publicProfiles',uid),{username,level:levelFor(xp),xp,avatar:avatar||''},{merge:true});
}
export async function findUser(name){
 const clean=normalise(name);if(!validUsername(clean))return null;
 const r=await getDoc(doc(db,'usernames',clean));if(!r.exists())return null;
 const p=await getDoc(doc(db,'publicProfiles',r.data().uid));
 return p.exists()?p.data():null;
}
export function photoFileToAvatar(file){return new Promise((resolve,reject)=>{
 if(!file||!file.type.startsWith('image/')||file.size>5_000_000)return reject(new Error('Bitte ein Bild bis 5 MB wählen.'));
 const url=URL.createObjectURL(file),im=new Image();
 im.onload=()=>{const c=document.createElement('canvas');c.width=c.height=96;const ctx=c.getContext('2d');const s=Math.min(im.width,im.height);ctx.drawImage(im,(im.width-s)/2,(im.height-s)/2,s,s,0,0,96,96);URL.revokeObjectURL(url);const data=c.toDataURL('image/jpeg',0.68);if(data.length>40000)reject(new Error('Bild zu gross.'));else resolve(data)};
 im.onerror=()=>{URL.revokeObjectURL(url);reject(new Error('Bild kann nicht gelesen werden.'))};im.src=url;
 });}
