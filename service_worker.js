(()=>{"use strict";const t=async function(t,e){let n=await caches.match(e.request),s=e.request;if(void 0!==n)return n;{const e=await fetch(s),n=e.clone(),a=await caches.open(t);return await a.put(s,n),e}},e=async function(t,e){let n=e.request;try{const e=await fetch(n),s=e.clone(),a=await caches.open(t);return await a.put(n,s),e}catch(t){return caches.match(e.request)}},n=[{url:/^chrome-extension:.*$/i,handle:async function(t,e){return fetch(e.request)}},{url:/^https:\/\/\w*\.github\.io\/nightTab\/.*$/i,handle:t},{url:/^(ftp|https?):.*\.(jpe?g|png|gif|svg)($|\?.*)/i,handle:t},{url:/^(ftp|https?):.*\.(mp\d|webm|ogg|wav|flac)($|\?.*)/i,handle:t},{url:/^(ftp|https?):.*\.(ttf|otf|woff\d?)($|\?.*)/i,handle:t},{url:/^(ftp|https?):.*\.([jt]sp?|css|html?)($|\?.*)/i,handle:e},{url:/^(ftp|https?):.*\.(csv|json|txt|xml)($|\?.*)/i,handle:e},{url:/.+/i,handle:t}],s="nightTab";self.addEventListener("install",(t=>{console.log("serviceWorker installing..."),t.waitUntil((async()=>{await caches.delete(s),await caches.open(s).then((t=>{chrome?.extension?console.log("running in chrome extension, nothing to cache"):t.addAll(["/","/index.html"])})),console.log("serviceWorker installed...")}))})),self.addEventListener("fetch",(t=>{"GET"!==t.request.method&&t.respondWith(fetch(t.request));let e=n.find((e=>e.url.test(t.request.url)));t.respondWith(e.handle(s,t))}))})();