if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let n=Promise.resolve();return s[e]||(n=new Promise((async n=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=n}else importScripts(e),n()}))),n.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},n=(n,s)=>{Promise.all(n.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(n)};self.define=(n,r,t)=>{s[n]||(s[n]=Promise.resolve().then((()=>{let s={};const i={uri:location.origin+n.slice(1)};return Promise.all(r.map((n=>{switch(n){case"exports":return s;case"module":return i;default:return e(n)}}))).then((e=>{const n=t(...e);return s.default||(s.default=n),s}))})))}}define("./sw.js",["./workbox-030153e1"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/bNTmnSEE5UtUErinrxKeD/_buildManifest.js",revision:"bNTmnSEE5UtUErinrxKeD"},{url:"/_next/static/bNTmnSEE5UtUErinrxKeD/_ssgManifest.js",revision:"bNTmnSEE5UtUErinrxKeD"},{url:"/_next/static/chunks/7f13179a3cbe98c1999a22a03a987114c59a03ce.684d13a861f53a062aaf.js",revision:"bNTmnSEE5UtUErinrxKeD"},{url:"/_next/static/chunks/bc6f0379ef776f032a764a2f7c2024eed1bc19eb.5ff94d16993e71295f47.js",revision:"bNTmnSEE5UtUErinrxKeD"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.67d4ed03933c25941c3f.js",revision:"bNTmnSEE5UtUErinrxKeD"},{url:"/_next/static/chunks/framework.f8bd46fc02868c500bda.js",revision:"bNTmnSEE5UtUErinrxKeD"},{url:"/_next/static/chunks/main-8acf4c6c3c7f5e0e1c19.js",revision:"bNTmnSEE5UtUErinrxKeD"},{url:"/_next/static/chunks/pages/_app-8a90c3327e794368cce9.js",revision:"bNTmnSEE5UtUErinrxKeD"},{url:"/_next/static/chunks/pages/_documents-fb9f8ca050d010bed402.js",revision:"bNTmnSEE5UtUErinrxKeD"},{url:"/_next/static/chunks/pages/_error-bbc3e32f3151e7607e46.js",revision:"bNTmnSEE5UtUErinrxKeD"},{url:"/_next/static/chunks/pages/index-4ab378c32ee1c9743139.js",revision:"bNTmnSEE5UtUErinrxKeD"},{url:"/_next/static/chunks/polyfills-144e5fa6fafab6397d9c.js",revision:"bNTmnSEE5UtUErinrxKeD"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"bNTmnSEE5UtUErinrxKeD"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/img/undraw_my_current_location_om7g.svg",revision:"dfacccc7c61cbe49bbcbc61e2aa0e4d8"},{url:"/manifest.json",revision:"c4d8d64468bcf31e13330cd8756c4189"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));