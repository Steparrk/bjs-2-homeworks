function cachingDecoratorNew(func) {
	const cache = [];
	return function(...args) {
		const hash = args.join(",");
		let cacheElement = cache.find((item) => item.hash === hash);
		if(cache.length > 5) {
			cache.splice(0, 1);
		}
		if(cacheElement === undefined) {
				let result = func.call(this, ...args);
				cache.push({hash, result});
				console.log(`Вычисляем: ${result}`)
				return `Вычисляем: ${result}`;
		}else{
			console.log(`Из кэша: ${cacheElement.result}`)
			return `Из кэша: ${cacheElement.result}`;
		}
	}
}


function debounceDecoratorNew(func, ms) {
	let LastCallTimestamp = null;

	return function(...args) {
		const now = new Date();
		if(LastCallTimestamp === null) {
			func.call(this, ...args);
			LastCallTimestamp = now;
			return;
		}
		if(LastCallTimestamp !== null && now - LastCallTimestamp > ms){
			func.call(this, ...args);
			console.log(now - LastCallTimestamp, ms);
			LastCallTimestamp = now;
			return;
		}
	}
}

function debounceDecorator2(func, ms) {
	let LastCallTimestamp = null;
	let count = 0;
	wrapper.history = [];
	function wrapper(...args) {
		const now = new Date();
		if(LastCallTimestamp === null) {
			count++;
			LastCallTimestamp = now;
			return func.call(this, ...args);
		}
		if(LastCallTimestamp !== null && now - LastCallTimestamp > ms){
			count++;
			LastCallTimestamp = now;
			wrapper.history.splice(0, 1, count);
			return func.call(this, ...args);
		}
	}
	return wrapper;
}
