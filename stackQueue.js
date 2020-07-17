const Stack = require('./stack');

class StackQueue {
    constructor() {
        this.forwardStack = new Stack();
        this.backwardStack = new Stack();
    }

    enqueue(data) {
        this.forwardStack.push(data);
    }

    dequeue() {
        let current = this.forwardStack.top;
        while (current !== null) {
            this.backwardStack.push(current.data)
        }

        let temp = this.backwardStack.pop();

        let currentBack = this.backwardStack.pop();
        while (currentBack !== null) {
            this.forwardStack.push(currentBack.data);
            currentBack = currentBack.next;
        }

        return temp;
    }
}

module.exports = StackQueue;