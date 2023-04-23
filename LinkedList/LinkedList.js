//Linked List in ES6
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    add = (data) => {
        let node = new Node(data);
        if (this.head === null) {
            this.head = node;
        } else {
            let tempNode = this.head;
            while (!!tempNode.next) {
                tempNode = tempNode.next;
            }
            tempNode.next = node;
        }
        this.length++;
    };

    getNodeAt = (Index) => {
        if (Index > this.length - 1 || Index < 0) {
            return undefined;
        } else {
            let tempNode = this.head;
            for (let i = 0; i < Index; i++) {
                tempNode = tempNode.next;
            }
            return tempNode;
        }
    };

    removeFrom = (Index) => {
        if (Index > this.length - 1 || Index < 0) {
            return undefined;
        } else {
            let tempNode = this.head;
            if (Index === 0) {
                this.head = tempNode.next;
            } else {
                let prevNode;
                for (let i = 0; i < Index; i++) {
                    prevNode = tempNode;
                    tempNode = tempNode.next;
                }
                prevNode.next = tempNode.next;
            }
        }
        this.length--;
    };

    insertAt = (Index, data) => {
        if (Index > this.length - 1 || Index < 0) {
            return undefined;
        } else {
            let tempNode = new Node(data);
            if (Index === 0) {
                tempNode.next = this.head;
                this.head = tempNode;
            } else {
                let prevNode;
                let currNode = this.head;
                for (let i = 0; i < Index; i++) {
                    prevnode = tempNode;
                    currNode = currNode.next;
                }
                prevNode.next = tempNode;
                tempNode.next = currNode;
            }
        }
        this.length++;
    };

    indexOf(data) {
        let currentNode = this.head;
        let index = 0;
        while (!!currentNode) {
            if (currentNode.data === data) {
                return index;
            } else {
                currentNode = currentNode.next;
                index++;
            }
        }
        return -1;
    }

    clear() {
        this.head = null;
        this.size = 0;
    }
}

const linkedList = new LinkedList();
linkedList.add(10);
console.log(linkedList.length);
linkedList.insertAt(1, 11);
console.log(linkedList.length);
linkedList.add(12);
console.log(linkedList.length);
