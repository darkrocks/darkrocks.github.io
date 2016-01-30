if (!Array.prototype.forEach) {
// Array.prototype.forEach
Array.prototype.forEach = function forEach(callback, scope) {
	for (var array = this, index = 0, length = array.length; index < length; ++index) {
		callback.call(scope || window, array[index], index, array);
	}
};

}
if (!Array.prototype.indexOf) {
// Array.prototype.indexOf
Array.prototype.indexOf = function indexOf(searchElement) {
	for (var array = this, index = 0, length = array.length; index < length; ++index) {
		if (array[index] === searchElement) {
			return index;
		}
	}

	return -1;
};

}
if (!String.prototype.trim) {
// String.prototype.trim
String.prototype.trim = function trim() {
	return this.replace(/^\s+|\s+$/g, '');
};

}
if (!Date.prototype.toISOString) {
// Date.prototype.toISOString
Date.prototype.toISOString = function toISOString() {
	var date = this;

	return ((date.getUTCMonth() + 1) / 100 + date.toUTCString() + date / 1e3).replace(/..(..).+?(\d+)\D+(\d+).(\S+).*(...)/,'$3-$1-$2T$4.$5Z');
};

}
if (!Function.prototype.bind) {
// Function.prototype.bind
Function.prototype.bind = function bind(scope) {
	var
	callback = this,
	prepend = Array.prototype.slice.call(arguments, 1),
	Constructor = function () {},
	bound = function () {
		return callback.apply(
			this instanceof Constructor && scope ? this : scope,
			prepend.concat(Array.prototype.slice.call(arguments, 0))
		);
	};

	Constructor.prototype = bound.prototype = callback.prototype;

	return bound;
};

}
if (!Array.prototype.map) {
// Array.prototype.map
Array.prototype.map = function map(callback, scope) {
	for (var array = this, arrayB = [], index = 0, length = array.length, element; index < length; ++index) {
		element = array[index];

		arrayB.push(callback.call(scope || window, array[index], index, array));
	}

	return arrayB;
};

}
if (!Array.prototype.filter) {
// Array.prototype.filter
Array.prototype.filter = function filter(callback, scope) {
	for (var array = this, arrayB = [], index = 0, length = array.length, element; index < length; ++index) {
		element = array[index];

		if (callback.call(scope || window, element, index, array)) {
			arrayB.push(element);
		}
	}

	return arrayB;
};

}
if (!Array.prototype.lastIndexOf) {
// Array.prototype.lastIndexOf
Array.prototype.lastIndexOf = function lastIndexOf(searchElement) {
	for (var array = this, index = array.length - 1; index > -1; --index) {
		if (array[index] === searchElement) {
			return index;
		}
	}

	return -1;
};

}
if (typeof Date !== "undefined" && !Date.now) {
// Date.now
Date.now = function now() {
	return new Date().getTime();
};

}
if (typeof Array !== "undefined" && !Array.isArray) {
// Array.isArray
Array.isArray = function isArray(array) {
	return array && Object.prototype.toString.call(array) === '[object Array]';
};

}
