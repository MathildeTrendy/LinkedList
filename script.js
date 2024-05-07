class Node {
    constructor(data) {
        this.prev = null;
        this.next = null;
        this.data = data;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Printing the whole list to console:
    dumpList() {
        let currentNode = this.head;
        console.log("LinkedList:");
        console.log(` 𝄪 Head: ${this.head ? this.head.data : null}`);
        console.log(` 𝄪 Tail: ${this.tail ? this.tail.data : null}`);
        console.log("▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁");

        while (currentNode) {
            console.log("Node:");
            console.log(`  Prev: ${currentNode.prev ? currentNode.prev.data : null}`);
            console.log(`  Next: ${currentNode.next ? currentNode.next.data : null}`);
            console.log(`  Data: ${currentNode.data}`);
            console.log("▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁");
            currentNode = currentNode.next;
        }
    }

    // Adding node as the last of the list:
    add(data) {
        const newNode = {
            prev: null,
            next: null,
            data
        };

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    // Adding node as the first in the list:
    addFirst(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    // Removes all nodes:
    clear() {
        this.head = null;
        this.tail = null;
    }

    // Place node at specific position in list:
    getAt(index) {
        const node = this.getNodeAt(index);
        return node ? node.data : undefined;
    }

    // Gets the position of a specific node in list:
    indexOf(data) {
        let index = 0;
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.data === data) {
                return index;
            }
            currentNode = currentNode.next;
            index++;
        }
        return -1;
    }

    // Inserts a new node after a given position in list:
    insertAfter(index, data) {
        const currentNode = this.getNodeAt(index);
        if (currentNode) {
            const newNode = new Node(data);
            newNode.prev = currentNode;
            newNode.next = currentNode.next;
            if (currentNode.next) {
                currentNode.next.prev = newNode;
            } else {
                this.tail = newNode;
            }
            currentNode.next = newNode;
        }
    }

    // Inserts new node before a given position in the list:
    insertBefore(index, data) {
        const currentNode = this.getNodeAt(index);
        if (currentNode) {
            const newNode = new Node(data);
            newNode.prev = currentNode.prev;
            newNode.next = currentNode;
            if (currentNode.prev) {
                currentNode.prev.next = newNode;
            } else {
                this.head = newNode;
            }
            currentNode.prev = newNode;
        }
    }

    // Returns first node in list:
    getFirst() {
        return this.head ? this.head.data : undefined;
    }

    // Returns last node in list:
    getLast() {
        return this.tail ? this.tail.data : undefined;
    }

    // Removes node at a specific position in list and returns it:
    removeAt(index) {
        const currentNode = this.getNodeAt(index);
        if (currentNode) {
            if (currentNode.prev) {
                currentNode.prev.next = currentNode.next;
            } else {
                this.head = currentNode.next;
            }

            if (currentNode.next) {
                currentNode.next.prev = currentNode.prev;
            } else {
                this.tail = currentNode.prev;
            }

            return currentNode.data;
        }
        return undefined;
    }

    // Removes first node in list and returns it:
    removeFirst() {
        return this.removeAt(0);
    }

    //  Removes last node in list and returns it:
    removeLast() {
        return this.removeAt(this.size() - 1);
    }

    // Inserts new node after an existing node in list:
    insertAfterNode(data, existingNode) {
        if (!existingNode) return;
        const newNode = new Node(data);
        newNode.prev = existingNode;
        newNode.next = existingNode.next;
        if (existingNode.next) {
            existingNode.next.prev = newNode;
        } else {
            this.tail = newNode;
        }
        existingNode.next = newNode;
    }

    // Inserts new node before an existing node in list:
    insertBeforeNode(data, existingNode) {
        if (!existingNode) return;
        const newNode = new Node(data);
        newNode.prev = existingNode.prev;
        newNode.next = existingNode;
        if (existingNode.prev) {
            existingNode.prev.next = newNode;
        } else {
            this.head = newNode;
        }
        existingNode.prev = newNode;
    }

    // Removes a given node from list:
    removeNode(node) {
        if (!node) return;
        if (node.prev) {
            node.prev.next = node.next;
        } else {
            this.head = node.next;
        }

        if (node.next) {
            node.next.prev = node.prev;
        } else {
            this.tail = node.prev;
        }
    }

    // Finds node at a given position in list:
    getNodeAt(index) {
        if (index < 0) return null;
        let currentIndex = 0;
        let currentNode = this.head;
        while (currentNode) {
            if (currentIndex === index) {
                return currentNode;
            }
            currentNode = currentNode.next;
            currentIndex++;
        }
        return null;
    }

    // Swaps the positions of two nodes in list:
    swapNodes(nodeA, nodeB) {
        if (!nodeA || !nodeB || nodeA === nodeB) return;

        const tempPrevA = nodeA.prev;
        const tempNextA = nodeA.next;

        nodeA.prev = nodeB.prev;
        nodeA.next = nodeB.next;

        nodeB.prev = tempPrevA;
        nodeB.next = tempNextA;

        if (nodeA.prev) {
            nodeA.prev.next = nodeA;
        } else {
            this.head = nodeA;
        }

        if (nodeA.next) {
            nodeA.next.prev = nodeA;
        } else {
            this.tail = nodeA;
        }

        if (nodeB.prev) {
            nodeB.prev.next = nodeB;
        } else {
            this.head = nodeB;
        }

        if (nodeB.next) {
            nodeB.next.prev = nodeB;
        } else {
            this.tail = nodeB;
        }
    }

    // Calculates size of list:
    size() {
        let count = 0;
        let currentNode = this.head;
        while (currentNode) {
            count++;
            currentNode = currentNode.next;
        }
        return count;
    }
}

// Testing list:
const ll = new LinkedList();

ll.add("Spyro");
ll.add("Sparx");
ll.add("Hunter");

ll.dumpList();

ll.addFirst("Zoe");
ll.insertAfter(1, "Elora");
ll.insertBefore(3, "Moneybags");

ll.dumpList();

console.log("Node at index 2 = ", ll.getAt(2));
console.log("Index of Elora = ", ll.indexOf("Elora"));

ll.removeAt(2);
ll.removeFirst();
ll.removeLast();

ll.dumpList();

const nodeX = new Node("Ripto");
ll.insertAfterNode("Gnasty Gnorc", nodeX);
ll.insertBeforeNode("Bianca", nodeX);

ll.dumpList();

ll.swapNodes(nodeX, ll.getNodeAt(1));

ll.dumpList();
