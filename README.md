# Queue [![Build Status](https://travis-ci.org/chrisaljoudi/Queue.svg?branch=master)](https://travis-ci.org/chrisaljoudi/Queue)
A simple, efficient queue module for node and the browser.

## Usage

Create a new empty queue:

```javascript
var q = new Queue();
```

Push something onto the queue:

```javascript
q.push(2);
```

Properties `top` and `length`:

```javascript
console.log(q.top, q.length);
```
Pop the head of the queue (returns the head):

```javascript
console.log(q.pop());
```

Reset the queue back to be empty:

```javascript
q.reset();
```

## Who wrote this?

Queue was written with care and love by [Chris](https://chrismatic.io/). 

## License

Queue is released under the MIT License. [See LICENSE](LICENSE).
