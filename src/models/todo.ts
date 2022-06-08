class Todo{ // one can also use type or interface
    id: string;
    text: string;

    constructor(todoText: string){
        this.text = todoText;
        this.id = new Date().toISOString();
    }
}

export default Todo;