class Picture {
    constructor(title, artist, link) {
        this.title = title;
        this.artist = artist;
        this.link = link;
    }
}

class Node {
    constructor(newPicture) {
        this.data = newPicture;
        this.next = null;
    }
}


// linkedlist class
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // functions to be implemented
    // add(element)
    // adds an element at the end
    // of list
    add(element) {
        // creates a new node
        var node = new Node(element);

        // to store current node
        var current;

        // if list is Empty add the
        // element and make it head
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;

            // iterate to the end of the
            // list
            while (current.next) {
                current = current.next;
            }

            // add node
            current.next = node;
        }
        this.size++;
    }
    // insertAt(element, location)
    // removeFrom(location)
    // removeElement(element)

    // Helper Methods
    // isEmpty
    // size_Of_List
    // PrintList
}

let slideShow = new LinkedList();
console.log(slideShow);

let picture1 = new Picture('gray skies', 'unknown', 'https://unsplash.com/photos/f5_lfi2S-d4');
slideShow.add(picture1);

let picture2 = new Picture('sunflowers', 'unknown', 'https://images.unsplash.com/photo-1626808642875-0aa545482dfb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60');
slideShow.add(picture2);

console.log(slideShow);
console.log('==================')
console.log('data')
console.log(slideShow.head.data)
console.log('==================')
console.log('next')
console.log(slideShow.head.next)
