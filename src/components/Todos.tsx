import React from "react";

const Todos: React.FC<{ items: string[] }> = (props) => {
  // type: react func. component, in the <> brackets - types of custom props
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default Todos;
