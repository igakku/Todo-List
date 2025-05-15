import React, { useEffect, useRef, useState } from 'react'
import './Todo.css'
import TodoList from '../TodoList/TodoList';

let count = 0
const Todo = () => {
    const[todos,setTodos]=useState([]);
    const inpRef = useRef('null');
    const sub =()=>{
        setTodos([...todos,{no:count++,text:inpRef.current.value,display:""}])
        inpRef.current.value="";
        localStorage.setItem("todo_count",count)
    }
    
    useEffect(()=>{
        setTodos(JSON.parse(localStorage.getItem("todos")));
        count=localStorage.getItem("todo_count")

    },[])
useEffect(()=>{
    setTimeout(()=>{

        console.log(todos)
        localStorage.setItem("todos", JSON.stringify(todos))
    },100)
},[todos])


  return (
    <div className="todo">
        
            <h2> Todo List</h2>
            <div className="list-input">
                <input ref={inpRef} type="text" placeholder='Todo List' />
           <div className="butn" onClick={()=>{sub()}} >Enter</div> 
            </div>
            <div className="todo-list">
                {todos.map((item,index)=>{
                    return<TodoList key={index} setTodos={setTodos} no={item.no} display={item.display} text={item.text} />

                })}
            </div>

        </div>
    
  )
}

export default Todo