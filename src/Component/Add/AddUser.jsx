import React from "react";
import { useState } from "react";

const AddUser = ({addUser}) => {
  const [Name,setName]= useState("");
  const [Email, setEmail]=useState("");


  const submit =(e)=>{
    e.preventDefault();
    if(!Name || !Email){
      alert("Name Or Email cannot be blank")
    }
    addUser(Name,Email);

  }
  return (
    <>
    <div className="container my-3">  
      <h3>Add User</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label forhtml="exampleInputEmail1" className="form-label">
            Username
          </label>
          <input
            type="name"
            className="form-control"
            id="name"
            aria-describedby="name"
            value={Name}
            onChange={(e)=>setName(e.target.value)}

          />
          <div id="emailHelp" className="form-text">
          </div>
        </div>
        <div className="mb-3">
          <label forhtml="exampleInputPassword1" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={Email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" forhtml="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-sm btn-primary">
          Add User
        </button>
      </form>
      </div>
    </>

  );
};

export default AddUser;
