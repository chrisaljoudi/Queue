# node-queue
### A simple, efficient queue module for node and the browser.

## Installation:
With [`npm`](https://www.npmjs.org/):
```bash
npm install node-queue
```
And then you can import:
```javascript
var Queue = require("node-queue");
```
## Usage:

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

## License

[New BSD](LICENSE).
