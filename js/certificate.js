// M219 Academy: client-side export of the signed certificate template.
const TEMPLATE = './assets/images/certificate-template.png';
export async function downloadCertificate({name,date,uid}) {
  const image = new Image();
  image.src = TEMPLATE;
  await new Promise((resolve,reject)=>{image.onload=resolve;image.onerror=()=>reject(new Error('Zertifikatsvorlage fehlt.'))});
  const canvas=document.createElement('canvas'); canvas.width=image.naturalWidth;canvas.height=image.naturalHeight;
  const ctx=canvas.getContext('2d');ctx.drawImage(image,0,0);
  const safeName=String(name||'Lernende Person').trim().slice(0,70);
  ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillStyle='#2d143f';
  let size=57; ctx.font=`${size}px Georgia, serif`;
  while(ctx.measureText(safeName).width>940 && size>26){size-=2;ctx.font=`${size}px Georgia, serif`;}
  // Name is placed above the empty gold recipient line on the template.
  ctx.fillText(safeName,724,520);
  const completion=new Date(date);const dateText=Number.isNaN(completion.getTime())?'':new Intl.DateTimeFormat('de-CH',{day:'2-digit',month:'2-digit',year:'numeric'}).format(completion);
  ctx.font='22px Georgia, serif'; ctx.fillStyle='#30293a';ctx.textAlign='left';
  ctx.fillText(dateText,640,696);
  const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));
  if(!blob)throw new Error('PNG konnte nicht erstellt werden.');
  const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=`M219_Academy_Zertifikat_${String(uid||'').slice(0,8)}.png`;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1200);
}
