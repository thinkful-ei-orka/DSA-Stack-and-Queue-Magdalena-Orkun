const Stack = require('./stack');
const Queue = require('./queue');
const DLQueue = require('./dlqueue');



    const starTrek = new Stack();
    starTrek.push('Kirk');
    starTrek.push('Spock');
    starTrek.push('McCoy');
    starTrek.push('Scotty');
    starTrek.pop();
    starTrek.pop();
    starTrek.push('Scotty');
    
// main();


const peek = (stack) => {
    return stack.top
};

const isEmpty = (stack) => {
    if (stack.top === null) {
        return true;
    } else {
        return false;
    }
};

const display = (stack) => {
    let current = stack.top;
    let dis = [];

    while (current !== null) {
        dis.push(current.data);
        current = current.next;
    }
    return dis.join(', ');
}



function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, ""); // taking out spaces and ignoring punctuation

    let string = '';
    const stack = new Stack();

    for (let i = 0; i < s.length; i++) {
        stack.push(s[i]);
    }

    let current = stack.top;
    while (current !== null) {
        string += stack.pop();
        current = current.next;
    }

    return (s === string);
}

// True, true, true, false
// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));

function matchParens(s) {
    //to make sure that there no unmatched paranthesis. 
    const stack = new Stack();
    let count = 0;

    for (let i = 0; i < s.length; i++) { //pushing our string's characters to the stack.
        stack.push(s[i])
    }

    let current = stack.top;
    while (current !== null) {
        let val = stack.pop();
        if (val === ')') count++;
        if (val === '(') count--;

        if (count < 0) {
            return `Missing a ')'`;
        }
        current = current.next;
    }
    if (count > 0) {
        return `Missing a '('`;
    }

    return true;
}

// console.log(matchParens('hello'));

const numStack = new Stack();
numStack.push(1);
numStack.push(3);
numStack.push(2);
numStack.push(4);
// console.log(display(numStack));


function sortStack(stack) {
    if (isEmpty(stack)) {  //check to see if stack's empty
        return null;
    }

    if (!stack.top.next) { // when we reach top of stack, return stack
        return stack;
    }

    let tempStack = new Stack();
    let temp = stack.pop();
    let current = stack.top;

    while (current !== null) {
        if (current.data >= temp) {
            tempStack.push(temp);
            temp = stack.pop();
        } else {
            tempStack.push(stack.pop());
        }
        current = current.next; //
    }

    let tempCurrent = tempStack.top;

    while (tempCurrent !== null) {
        if (tempCurrent.data < temp) {
            stack.push(temp);
            temp = tempStack.pop();
        } else {
            stack.push(tempStack.pop());
        }
        tempCurrent = tempCurrent.next; 
    }
    stack.push(temp);
    return stack;

}

// console.log(display(sortStack(numStack)));


const starTrekQ = new Queue();
starTrekQ.enqueue('Kirk');
starTrekQ.enqueue('Spock');
starTrekQ.enqueue('Uhura');
starTrekQ.enqueue('Sulu');
starTrekQ.enqueue('Checkov');

function peekQ(queue) {
    return queue.first;
}

function isEmptyQ(queue) {
    return (!queue.first);
}

function displayQ(queue) {
    let current = queue.first;
    let dis = [];

    while (current) {
        dis.push(current.data);
        current = current.next;
    }
    return dis.join(', ');
}
starTrekQ.dequeue();
starTrekQ.dequeue();
starTrekQ.dequeue();
starTrekQ.dequeue();
starTrekQ.enqueue('Kirk');
starTrekQ.enqueue('Uhura');
starTrekQ.enqueue('Sulu');
starTrekQ.dequeue();
starTrekQ.enqueue('Checkov');
// console.log(displayQ(starTrekQ));


const starTrekDLQ = new DLQueue();
starTrekDLQ.enqueue('Kirk');
starTrekDLQ.enqueue('Uhura');
starTrekDLQ.enqueue('Sulu');
starTrekDLQ.enqueue('Checkov');

// console.log(peekQ(starTrekDLQ));



function squareDance(queue) {
    const spareQueue = new Queue();
  
    let m = '';
    let f = '';

    let current = queue.first;
   
    while (current) {
        if (current.data.startsWith('F')) {
            if (f === '') {
                f = current.data.split(' ')[1];
            }
            else {
                spareQueue.enqueue(current.data);
            }
        }

        if (current.data.startsWith('M')) {
            if (m === '') {
                m = current.data.split(' ')[1];
            }
            else {
                spareQueue.enqueue(current.data);
            }
        }
     
        if (m && f) {
            console.log(`Female dancer is ${f}, and the male dancer is ${m}`);
            m = '';
            f = '';
        }
        
        if (spareQueue.first) {
            if (spareQueue.first.data.startsWith('M')) {
                if (m === '') { 
                    
                    m = spareQueue.dequeue();
                    m = m.split(' ')[1];
                }
            } else if (spareQueue.first.data.startsWith('F')) {
                if (f === '') {
                    console.log(m)
                    f = spareQueue.dequeue();
                    f = f.split(' ')[1];
                }
            }
        }

        console.log('hello')

        current = current.next;
    }

    let maleCount = 0;
    let femaleCount = 0;
    let spareCurrent = spareQueue.first;

    while (spareCurrent) {
        if (spareCurrent.data.startsWith('M')) {
            maleCount++;
        }
        if (spareCurrent.data.startsWith('F')) {
            femaleCount++;
        }
        spareCurrent = spareCurrent.next;
    }

    if (m) {
        maleCount++;
    }

    if (f) {
        femaleCount++;
    }

    if (maleCount) {
        console.log(`There are ${maleCount} male dancers waiting to dance`);
    }

    if (femaleCount) {
        console.log(`There are ${femaleCount} male dancers waiting to dance`);
    }

}

const testQueue = new Queue();
testQueue.enqueue('F Jane');
testQueue.enqueue('M Frank');
testQueue.enqueue('M John');
testQueue.enqueue('F Beyonce');
testQueue.enqueue('M Sherlock');
testQueue.enqueue('F Madonna');
testQueue.enqueue('M David');
testQueue.enqueue('M Christopher');

console.log(squareDance(testQueue));


//10 

// One in every 4 customers is sent back to the end of the queue. 

//Assuming each person takes 15 second in the queue, and we have 100 customers:
// - On average, every minute, one person will be sent back to the end of queue, while 3 get out.
// - after 1 minute, queue has 97 people.
// - after 5 minutes, queue has 85 people.
// - after 10 minutes, queue has 70 people.
// This process will go on forever until they all get their paperwork.


