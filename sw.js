const staticAssets = [
	'./',
	'./style.css',
	'./script.js',
	'./audio/robot/insidepull.mp3',
	'./audio/robot/insidepush.mp3',
	'./audio/robot/long.mp3',
	'./audio/robot/middle.mp3',
	'./audio/robot/pull.mp3',
	'./audio/robot/push.mp3',
	'./audio/robot/set.mp3',
	'./audio/robot/short.mp3',
	'./audio/robot/spray.mp3',
	'./audio/robot/straight.mp3'
];



self.addEventListener('install',async event=>{
	const cache = await caches.open('app-static');
	cache.addAll(staticAssets);
});

self.addEventListener('fetch',event =>{
	const req = event.request;
	event.respondWith(cacheFirst(req));
});

async function cacheFirst(req){
	const cachedResponse = await caches.match(req);
	return cachedResponse || fetch(req);
}