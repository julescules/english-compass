const CACHE_NAME = "english-compass-public-v1.14.0";
const APP_SHELL = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./content.js",
  "./practice-bulk-grammar.js",
  "./practice-bulk-listening.js",
  "./practice-bulk-speaking.js",
  "./practice-bulk-translation.js",
  "./practice-expansion-grammar-v100.js",
  "./practice-expansion-grammar-v140.js",
  "./practice-expansion-grammar-v180.js",
  "./practice-expansion-grammar-v220.js",
  "./practice-expansion-listening-v180.js",
  "./practice-expansion-listening-v260.js",
  "./practice-expansion-listening-v340.js",
  "./practice-expansion-listening-v400.js",
  "./practice-expansion-speaking-v140.js",
  "./practice-expansion-speaking-v200.js",
  "./practice-expansion-speaking-v260.js",
  "./practice-expansion-speaking-v320.js",
  "./practice-expansion-translation-v180.js",
  "./practice-expansion-translation-v260.js",
  "./practice-expansion-translation-v340.js",
  "./practice-expansion-translation-v400.js",
  "./practice-expansion-v1100.js",
  "./practice-expansion-v1110.js",
  "./practice-expansion-v1120.js",
  "./practice-expansion-v1130.js",
  "./practice-expansion-v190.js",
  "./practice-extra.js",
  "./practice-more-grammar.js",
  "./practice-more-grammar-2.js",
  "./practice-more-listening-2.js",
  "./practice-more-speaking.js",
  "./practice-more-speaking-2.js",
  "./practice-more-translation-2.js",
  "./practice-more-translation-listening.js",
  "./practice-reading-v100.js",
  "./practice-reading-v140.js",
  "./practice-refinements-v1140.js",
  "./vocabulary-bulk-a1-a2.js",
  "./vocabulary-bulk-b1.js",
  "./vocabulary-bulk-b2.js",
  "./vocabulary-expansion-v1500.js",
  "./vocabulary-expansion-v2000.js",
  "./vocabulary-expansion-v2500.js",
  "./vocabulary-expansion-v3000.js",
  "./vocabulary-expansion-v3500.js",
  "./vocabulary-expansion-v4000.js",
  "./vocabulary-expansion-v4250.js",
  "./vocabulary-expansion-v4500.js",
  "./vocabulary-expansion-v4750.js",
  "./vocabulary-extra.js",
  "./vocabulary-more-a1-a2.js",
  "./vocabulary-more-b1.js",
  "./vocabulary-more-b2.js",
  "./manifest.webmanifest",
  "./assets/icon.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response.ok && new URL(event.request.url).origin === self.location.origin) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        }
        return response;
      })
      .catch(() => caches.match(event.request).then((cached) => cached || caches.match("./index.html")))
  );
});