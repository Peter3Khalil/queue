class Queue{
    constructor(){
        this.items = [];
        this.rear = 0;
        this.front = 0;
    }

    enqueue(element){
        this.items[this.rear] = element; // insert element
        this.rear++; // go to next cell
    }
    dequeue(){
        if(!this.isEmpty()){
        let temp = this.items[this.front]; // save element
        delete this.items[this.front]; 
        this.front++; // go to next element
        return temp;
        }
        return null;
    }
    size(){return this.rear-this.front;}
    isEmpty(){
        return this.front-this.rear === 0;
    }
    peek(){
        return this.isEmpty()? null : this.items[this.front];
    }
}
module.exports = Queue;