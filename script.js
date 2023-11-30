class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
    }
  }

  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.nextNode;
    }
    return count;
  }

  gethead() {
    return this.head;
  }

  gettail() {
    return this.tail;
  }

  at(index) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === index) {
        return current;
      }
      count++;
      current = current.nextNode;
    }
    return null;
  }

  pop() {
    if (!this.head) {
      return null;
    }

    if (this.head === this.tail) {
      const poppedNode = this.head;
      this.head = null;
      this.tail = null;
      return poppedNode;
    }

    let current = this.head;
    while (current.nextNode !== this.tail) {
      current = current.nextNode;
    }

    const poppedNode = this.tail;
    current.nextNode = null;
    this.tail = current;
    return poppedNode;
  }

  contains(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) {
        return index;
      }
      index++;
      current = current.nextNode;
    }
    return null;
  }

  toString() {
    let result = "";
    let current = this.head;
    while (current) {
      result += `(${current.value}) -> `;
      current = current.nextNode;
    }
    result += "null";
    return result;
  }

  insertAt(value, index) {
    if (index === 0) {
      this.prepend(value);
    } else {
      const newNode = new Node(value);
      let current = this.head;
      let count = 0;
      while (count < index - 1 && current) {
        current = current.nextNode;
        count++;
      }
      if (current) {
        newNode.nextNode = current.nextNode;
        current.nextNode = newNode;
        if (newNode.nextNode === null) {
          this.tail = newNode;
        }
      }
    }
  }

  removeAt(index) {
    if (index === 0) {
      this.head = this.head.nextNode;
      if (!this.head) {
        this.tail = null;
      }
    } else {
      let current = this.head;
      let count = 0;
      while (count < index - 1 && current) {
        current = current.nextNode;
        count++;
      }
      if (current && current.nextNode) {
        current.nextNode = current.nextNode.nextNode;
        if (current.nextNode === null) {
          this.tail = current;
        }
      }
    }
  }
}

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.prepend(0);
linkedList.insertAt(1.5, 2);
console.log(linkedList.toString());
linkedList.removeAt(2);
console.log(linkedList.toString());
console.log(linkedList.size());
console.log(linkedList.gethead());
console.log(linkedList.gettail());
console.log(linkedList.at(1));
console.log(linkedList.contains(1));
console.log(linkedList.find(2));
console.log(linkedList.pop());
console.log(linkedList.toString());
