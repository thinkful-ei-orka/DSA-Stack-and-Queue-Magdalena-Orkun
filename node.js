class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
        this.prev = null;
    }
}

module.exports = _Node;