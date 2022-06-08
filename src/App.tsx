import React, { useState } from 'react';
import NewTodo from './components/NewTodo'
import Todos from './components/Todos'
import Todo from './models/todo'

function App() {

  const [todos, setTodos] = useState<Todo[]>([]) // if we do not specify <Todo[]> TS will infer 'never[]' which is always empty array

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    })
    
  }


  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items = {todos}/>
    </div>
  );
}

export default App;
