import React from 'react'

const TodoItem = ({todos,onDelete}) => {
    
  return (
    <>    <div>
      <h1></h1>
      <h4>{todos?.Name}</h4>
      <p>{todos?.Email}</p>   
      <button  className='btn btn-sm btn-danger' onClick={()=>{onDelete(todos)}}>Delete</button>   

      </div>



           </>

    
  )
} 

export default TodoItem
