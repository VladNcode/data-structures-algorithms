const a = new Promise(resolve => resolve('a'));
const b = new Promise(resolve => resolve('b'));
const c = new Promise(resolve => resolve('c'));

const d = () => new Promise((resolve, reject) => reject('d'));
const e = () => new Promise((resolve, reject) => reject('e'));
const f = () => new Promise((resolve, reject) => reject('f'));

Promise.all([a, b, d()])
	.then()
	.catch(e => console.log('Promise.all #1 error'));

// this works even if some / all promises get rejected
Promise.allSettled([d(), e(), f()]).then(resp => {
	console.log('Promise.allSettled #1 result', resp);
});

// if first promise rejects it goes to catch
Promise.race([d(), a, b])
	.then()
	.catch(error => {
		console.error('Promise.race #1 error', error);
	});

// Returns first promise that is not rejected
Promise.any([d(), a, b]).then(res => {
	console.log('Promise.any #1 result', res);
});

// All promises were rejected
Promise.any([d(), e(), f()])
	.then()
	.catch(error => {
		console.error('Promise.any #2 error', error);
	});
