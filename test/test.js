var assert = require("assert");
var Queue = require("../index.js");

describe("Queue", function() {
	describe("one push", function() {
		var q = new Queue();
		q.push(2);
		it("offset should be 0", function() {
			assert.equal(q.offset, 0);
		});
		it("length should be 1", function() {
			assert.equal(q.length, 1);
		});
		it("top should be 2", function() {
			assert.equal(q.top, 2);
		});
	});
	describe("two pushes", function() {
		var q = new Queue();
		q.push(2);
		q.push(10);
		it("top should be 2", function() {
			assert.equal(q.top, 2);
		});
		it("length should be 2", function() {
			assert.equal(q.length, 2);
		});
		it("offset should be 0", function() {
			assert.equal(q.offset, 0);
		});
	});
	describe("two pushes and pop", function() {
		var q = new Queue();
		q.push(2);
		q.push(10);
		it(".pop() should return 2", function() {
			assert.equal(q.pop(), 2);
		});
		it("top should be 10", function() {
			assert.equal(q.top, 10);
		});
		it("length should be 1", function() {
			assert.equal(q.length, 1);
		});
		it("offset should be 1", function() {
			assert.equal(q.offset, 1);
		});
		it("after reset length should be 0", function() {
			q.reset();
			assert.equal(q.length, 0);
		});
	});
});
