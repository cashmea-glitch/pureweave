const adminMode=location.hash==='#admin';
window.addEventListener('hashchange',()=>{if((location.hash==='#admin')!==adminMode)location.reload()});
if(adminMode){document.title='pureweave | Shop management';document.body.innerHTML=window.PUREWEAVE_ADMIN_HTML;}
const script=document.createElement('script');script.src=adminMode?'admin.js':'app.js';document.body.appendChild(script);
if(adminMode)script.onload=()=>{
 const download=(name,text,type)=>{const u=URL.createObjectURL(new Blob([text],{type})),a=document.createElement('a');a.href=u;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(u),1000)};
 document.querySelector('#exportCatalogue').onclick=()=>{const s=PureweaveStore.read();const c={version:Date.now().toString(36),products:s.products,settings:s.settings};download('catalogue-data.js','window.PUREWEAVE_CATALOGUE='+JSON.stringify(c).replace(/</g,'\\u003c')+';','text/javascript');alert('Replace catalogue-data.js in your website folder or hosting with this downloaded file. It includes product pictures, prices, logo and settings, but no customer data.');};
 document.querySelector('#exportBackup').onclick=()=>download('pureweave-backup.json',JSON.stringify(PureweaveStore.read()),'application/json');
 document.querySelector('#importBackup').onchange=async e=>{try{const f=e.target.files[0];if(!f)return;const b=JSON.parse(await f.text());PureweaveStore.validate(b);if(!confirm('Replace products, settings and local orders in this browser with this backup?'))return;b.version=window.PUREWEAVE_CATALOGUE.version;PureweaveStore.write(b);location.reload()}catch(err){alert('Could not import backup: '+err.message)}};
};
