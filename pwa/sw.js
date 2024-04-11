const staticCacheKey = 'sw-v1'
const dynamicCacheKey = 'd-sw-v1'

const cacheResources = [
    'index.html',
    'offline.html',
    'styles.css',
    'script.js',
];
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(staticCacheKey).then((cache) => cache.addAll(cacheResources))
    )
})

const cacheFirst = async (req) => {
    const cachedResponse = await caches.match(req)
    return cachedResponse ?? await fetch(req)
}

const networkFirst = async (req) => {
    const cache = await caches.open(dynamicCacheKey)
    try {
        const response = await fetch(req)
        await cache.put(req, response.clone())
        return response
    } catch (error) {
        const cachedResponse = await cache.match(req)
        return cachedResponse ?? await caches.match('offline.html')
    }
}

self.addEventListener('fetch', (event) => {
    const {request} = event

    const url = new URL(request.url)

    if (url.origin === location.origin) {
        event.respondWith(cacheFirst(request))
    } else {
        event.respondWith(networkFirst(request))
    }
})
