const CACHE_NAME = 'maredbseh-cache-v28'; // تحديث الإصدار إلى v28 لإجبار المتصفح على التحديث
const assets = [
  './',
  './index.html',
  './home.html',
  './manifest.json',
  './icon.png' // التأكد من إدراج الأيقونة هنا ليتم كاشيرتها بنجاح
];

// تثبيت الـ Service Worker وحفظ الملفات الجديدة
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    }).then(() => self.skipWaiting())
  );
});

// تفعيل الـ Service Worker وحذف الكاش القديم تماماً
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// جلب الملفات
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cachedResponse => {
      return cachedResponse || fetch(e.request);
    })
  );
});
