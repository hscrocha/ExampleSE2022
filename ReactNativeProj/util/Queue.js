
export default class Queue{
    #elements = [];
//    constructor(){     
//    }
    size(){
        return this.#elements.length; 
    }
    isEmpty(){
        return this.size()===0;
    }
    enqueue(elem){
        this.#elements.push(elem);
    }
    dequeue(){
       if(this.isEmpty()) throw 'Dequeue Empty Elements';
       return this.#elements.shift(); 
    }
    first(){
        if(this.isEmpty()) return null;
        else return this.#elements[0];
    }
    getElements(){
        return [... this.#elements];
    }
}