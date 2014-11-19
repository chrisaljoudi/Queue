function Queue() {
	this.queue = [];
	this.offset = 0;
}
Queue.prototype.push = function(val) {
	this.queue.push(val);
};
Queue.prototype.pop = function() {
	var queue = this.queue;
	if(queue.length === 0) {
		return undefined;
	}
	var old = queue[this.offset];
	this.offset ++;
	if(this.offset * 2 >= queue.length) {
		queue = queue.slice(this.offset);
		this.offset = 0;
	}
	return old;
};
Queue.prototype.reset = function() {
	this.queue = [];
	this.offset = 0;
};
Object.defineProperty(Queue.prototype, "length", {
	get: function length() {
		return this.queue.length - this.offset;
	}
});
Object.defineProperty(Queue.prototype, "top", {
	get: function length() {
		var queue = this.queue;
		return (queue.length > 0 ? queue[this.offset] : undefined);
	}
});
module.exports = Queue;
