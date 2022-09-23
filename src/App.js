import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Todos from "./Component/Navbar/Todos/Todos";
import React, { useState } from "react";
import AddUser from "./Component/Add/AddUser";
function App() {
  const onDelete = (todos) => {
    console.log("Deleted", todos);
    settodo(
      todo.filter((e) => {
        return e !== todos;
      })
    );
  };



  const addUser = (Name, Email) => {
    console.log("I Am Adding a User", Name, Email);
     let sno = todo[todo.length-1].sno +1;
    const myTodo = {
      sno:sno,
      Name: Name,
      Email: Email,
    }
    settodo([...todo, myTodo]);
    console.log(myTodo)
  }


  const [todo, settodo] = useState([
    {
      sno: 1,
      Name: "Yuvraj",
      Email: "Yuvraj@gamil.com",
    },
    {
      sno: 2,
      Name: "Raj",
      Email: "Raj@gamil.com",
    },
    {
      sno: 3,
      Name: "Vijay",
      Email: "Vijay@gamil.com",
    },
  ]);

  return (
    <>
      <Navbar tittle="TodosList" searchbar={true} />
      <AddUser addUser={addUser} />

      <Todos todos={todo} onDelete={onDelete} />
    </>
  );
}

export default App;
