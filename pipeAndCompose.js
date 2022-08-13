const multBy3 = n => n * 3;
const makePositive = n => Math.abs(n);
const divBy5 = n => n / 5;

const composeStatic = (fn, fn2) => arg => fn2(fn(arg));
const multBy3AndAbsolute = composeStatic(multBy3, makePositive);

const pipe = function (...fns) {
	return function (x) {
		return fns.reduce((arg, fn) => fn(arg), x);
	};
};

const pipeArrow =
	(...fns) =>
	x =>
		fns.reduce((arg, fn) => fn(arg), x);

const pipeWithArgs = (...fns) =>
	fns.reduce(
		(arg, fn) =>
			(...args) =>
				fn(arg(...args)),
	);

// ########################################

const compose = function (...fns) {
	return function (x) {
		return fns.reduceRight((arg, fn) => fn(arg), x);
	};
};

const composeArrow =
	(...fns) =>
	x =>
		fns.reduceRight((arg, fn) => fn(arg), x);

const composeWithArgs = (...fns) =>
	fns.reduceRight(
		(arg, fn) =>
			(...args) =>
				fn(arg(...args)),
	);

console.log(pipe(makePositive, multBy3, divBy5)(-50));
