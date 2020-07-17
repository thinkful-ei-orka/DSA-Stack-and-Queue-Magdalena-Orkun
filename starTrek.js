const Stack = require('./stack');

function startTrek() {
    var stack = new Stack();

    stack.push('Kirk');
    stack.push('Spock');
    stack.push('McCoy');
    stack.push('Scotty ');
    console.log(stack);

}

console.log(startTrek())
