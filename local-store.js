(()=>{
 const key='pureweaveStaticDataV1',catalogue=window.PUREWEAVE_CATALOGUE;
 let memory=null;
 const copy=o=>JSON.parse(JSON.stringify(o));
 const initial=()=>({version:catalogue.version,products:copy(catalogue.products),settings:copy(catalogue.settings),orders:[]});
 let storageOK=true;try{localStorage.setItem('pw-test','1');localStorage.removeItem('pw-test')}catch{storageOK=false}
 function read(){let s=memory;if(storageOK){try{s=JSON.parse(localStorage.getItem(key)||'null')}catch{}}
  if(!s)s=initial();
  if(s.version!==catalogue.version){s={...s,version:catalogue.version,products:copy(catalogue.products),settings:copy(catalogue.settings)};write(s)}
  return copy(s);
 }
 function write(s){memory=copy(s);if(storageOK){try{localStorage.setItem(key,JSON.stringify(s))}catch{throw Error('Browser storage is full. Download a backup and use smaller product pictures.')}}return s}
 const image=s=>typeof s==='string'&&(s===''||/^assets\/[a-zA-Z0-9_-]+\.svg$/.test(s)||/^data:image\/(png|jpeg|webp);base64,[A-Za-z0-9+/=]+$/.test(s));
 function validate(s){if(!s||!Array.isArray(s.products)||!s.settings||!Array.isArray(s.orders))throw Error('Invalid backup');if(s.products.length>500)throw Error('Too many products');const ids=new Set();for(const p of s.products){if(!p.id||ids.has(p.id)||typeof p.name!=='string'||!Number.isFinite(p.price)||p.price<0||!Array.isArray(p.sizes)||!p.sizes.length||!p.sizes.every(x=>typeof x==='string')||!image(p.image))throw Error('Invalid product');ids.add(p.id)}if(!Number.isFinite(s.settings.shipping)||s.settings.shipping<0||!image(s.settings.logo)||!image(s.settings.qr))throw Error('Invalid shop settings');for(const o of s.orders){if(!o.id||!Array.isArray(o.items)||!Number.isFinite(o.total)||!o.items.every(i=>typeof i.name==='string'&&Number.isFinite(i.price)&&Number.isInteger(i.qty)&&i.qty>0))throw Error('Invalid order data')}return true}
 async function api(p,b){let s=read();
  if(p==='catalog')return {products:s.products,settings:s.settings,passwordEnabled:false};
  if(p==='orders')return copy(s.orders).reverse();
  if(p==='login'||p==='logout')return {ok:true};
  if(p==='upload'){if(!image(b.image)||!b.image.startsWith('data:'))throw Error('Use JPEG, PNG or WebP');return {url:b.image}}
  if(p==='products'){s.products=b;validate(s);write(s);return {ok:true}}
  if(p==='settings'){if(b.upi&&!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+$/.test(b.upi))throw Error('Enter a verified UPI ID, not just a phone number');s.settings=b;validate(s);write(s);return {ok:true}}
  if(p==='status'){const o=s.orders.find(o=>o.id===b.id);if(!o)throw Error('Order not found');o.status=b.status;o.paymentStatus=b.paymentStatus;write(s);return {ok:true}}
  if(p==='order'){
   if(!s.settings.live)throw Error('The shop is in preview. Orders are not enabled.');
   if(!b.name.trim()||!/^\+?[0-9\s-]{10,16}$/.test(b.phone))throw Error('Enter your name and a valid WhatsApp number');
   if(!b.items?.length)throw Error('Your bag is empty');
   const items=b.items.map(i=>{const q=s.products.find(p=>p.id===i.id);if(!q||!q.sizes.includes(i.size)||!Number.isInteger(i.qty)||i.qty<1||i.qty>50)throw Error('Invalid size or quantity');return {id:q.id,name:q.name,size:i.size,qty:i.qty,price:q.price}});
   if(!['WhatsApp','UPI'].includes(b.payment))throw Error('Invalid payment');
   if(b.payment==='UPI'&&!s.settings.upi&&!s.settings.qr)throw Error('UPI is not configured');
   const o={id:'PW-'+Date.now().toString(36).toUpperCase()+'-'+Math.random().toString(36).slice(2,7).toUpperCase(),created:new Date().toISOString(),name:b.name.trim(),phone:b.phone,address:b.address||'',reference:b.reference||'',payment:b.payment,status:'WhatsApp request',paymentStatus:'Unverified',items,shipping:s.settings.shipping};o.total=(items.reduce((sum,i)=>sum+Math.round(i.price*100)*i.qty,0)+Math.round(o.shipping*100))/100;
   s.orders.push(o);write(s);return o;
  }
  throw Error('Unknown operation');
 }
 window.PureweaveStore={api,read,write,validate,storageOK};
 if(!storageOK)window.addEventListener('DOMContentLoaded',()=>alert('Browser storage is unavailable. Changes will last only until you close this page. Allow local storage or use another browser.'));
})();
