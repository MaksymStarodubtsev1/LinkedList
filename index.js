class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}



class LinkedList {
    constructor(value) {
        this.head = new Node(value)
    }

    prepend(value) {
        const node = new Node(value)

        node.next = this.head

        this.head = node
    }

    append(value) {
        const node = new Node(value)

        let lastNode = this.head

        while (lastNode.next !== null) {
            lastNode = lastNode.next
        }

        lastNode.next = node
    }

    insertBefore(position, value) {
        const node = new Node(value)

        let parrentNode = this.head

        for (let i = 1; i < position; i++) {
            if (parrentNode.next === null) {
                break
            }

            parrentNode = parrentNode.next
        }

        node.next = parrentNode.next

        parrentNode.next = node
    }
}

const linkedList = new LinkedList(2)

linkedList.prepend(1)
linkedList.append(3)
linkedList.insertBefore(0, 1.5)

console.log(JSON.stringify(linkedList));