module.exports = function() {
	var queue = [], offset = 0;
	this.__defineGetter__("length", function() {
		return queue.length - offset;
	});
	this.__defineGetter__("top", function() {
		return (queue.length > 0 ? queue[offset] : undefined);
	});
	this.push = function(val) {
		queue.push(val);
	};
	this.pop = function() {
		if(queue.length === 0) {
			return undefined;
		}
		var old = queue[offset];
		offset ++;
		if(offset * 2 >= queue.length) {
			queue = queue.slice(offset);
			offset = 0;
		}
		return old;
	};
	this.reset = function() {
		queue = [];
		offset = 0;
	};
};
