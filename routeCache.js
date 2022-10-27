const NodeCache = require("node-cache")

const cache = new NodeCache()

module.exports = duration => (req,res,next) => {

	if(req.method !== 'GET') {
		console.error("cannot cache");
		return next();
	}

	const key = req.originalUrl;

	const cachedResponse = cache.get(key)

	if(cachedResponse) {
		console.log('cache hit')
		res.send(cachedResponse)
	} else {
		console.log('cache miss')
		res.originalSend = res.send
		res.send = body => {
			res.originalSend(body)
			cache.set(key,body,duration)
		}
		next()	
	}

}