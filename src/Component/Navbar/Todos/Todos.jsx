import React from "react";
import TodoItem from "../../TodoItem/TodoItem";

const Todos = (props) => {
  return (
    <div className="container">
      <h3 className="text-center my-3">TodosList</h3> 
      {props.todos.length===0?"4y5iu3hj":
          props.todos.map((todos)=>{
            return       <TodoItem todos={todos} key={todos.sno} onDelete={props.onDelete} />

          })}
          
      
    </div>
  );
};

export default Todos;
