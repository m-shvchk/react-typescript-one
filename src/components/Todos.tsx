import React from "react";
import Todo from '../models/todo'
import TodoItem from './TodoItem'

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  // type: react func. component, in the <> brackets - types of custom props
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text}/>
      ))}
    </ul>
  );
};

export default Todos;
