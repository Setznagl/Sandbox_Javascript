class Node {
    constructor(data){
        this.data = data;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    //a

    add(data){
        let newNode = new Node(data);

        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode; 
            newNode.previous = this.tail; 
            this.tail = newNode; 
        }
        this.size++;
    }

    insertAt(data , index){
        if(index < 0 || index > this.size){
            return console.log("Index fora dos limites!");
        }
        
        let newNode = new Node(data);
        let current = this.head;

        if(index === 0){
            if(this.head === null){
                this.head = newNode;
                this.tail = newNode;
            } else {
                newNode.next = this.head; 
                this.head.previous = newNode; 
                this.head = newNode; 
            }
        } else if(index === this.size){
            this.tail.next = newNode;
            newNode.previous = this.tail; 
            this.tail = newNode; 
        } else {
            for(let i = 0; i < index; i++){
                current = current.next; 
            }

            newNode.next = current; 
            newNode.previous = current.previous; 

            current.previous.next = newNode;
            current.previous = newNode;
        };
    }

    removeAt(index){
        if(index < 0 || index > this.size){
            return console.log("Index fora dos limites!");
        }
        let current = this.head;

        if(index === 0){
            this.head = this.head.next;

            if(this.head !== null){
                this.head.previous = null;
            } else{
                this.tail = null;
            }
        } else if(index === this.size -1 ){
            this.tail = this.tail.previous;
            this.tail.next= null;
        } else {
            for(let i = 0 ; i < index ; i++){
                current = current.next;
            }

            current.previous.next = current.next;
            current.next.previous = current.previous;
        }
        this.size--;
    }

    getData(index){
         if(index < 0 || index > this.size){
            return console.log("Index fora dos limites!");
        }

        let current = this.head;
        for(let i = 0 ; i < index ; i++){
            current = current.next;
        }
        
        return current.data;
    }
    print(){
        let current = this.head;
        let resut = [];

        while(current !== null){
            resut.push(current.data);
            current = current.next;
        }
        console.log(resut.join(' <=> '))
    }
    removeAll(){
        let current = this.head;

        while(current !== null){
            current = current.next;
        }
    }
    clear(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
};

let testeLista = new DoublyLinkedList();

testeLista.add("Primeiro Elemento");
testeLista.add("Segundo Elemento");
testeLista.add("Terceiro Elemento");

console.log(testeLista.getData(2));

testeLista.print();
