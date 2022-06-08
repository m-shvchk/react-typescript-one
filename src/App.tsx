import React from 'react';
import Todos from './components/Todos'
import Todo from './models/todo'

function App() {
  const todos =[
    new Todo('todo#1'),
    new Todo('todo#2')
  ]
  return (
    <div>
      <Todos items = {todos}/>
    </div>
  );
}

export default App;
