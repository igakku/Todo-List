import React from "react";
import "./TodoList.css";

const TodoList = ({ no, text, display, setTodos }) => {
    const deleteTodo =(no)=>{
        let data = JSON.parse(localStorage.getItem("todos"));
        data=data.filter((todo)=>todo.no!==no);
        setTodos(data);
    }



  const tick = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    for (let i = 0; i < data.length; i++) {
      if (data[i].no === no) {
        if (data[i].display === "") {
          data[i].display = "line-Through";
        } else {
          data[i].display = "";
        }
        break;
      }
    }
    setTodos(data);
  };
  return (
    <div className="TodoList">
      <div
        className={`todo-item${display}`}
        onClick={() => {
          tick(no);
        }}
      >
        {display === "" ? (
          <div className="not-check">⭕</div>
        ) : (
          <div className="check">✔</div>
        )}
      </div>
        <div className="todo-text">{text}</div>
      <div className="wrong" onClick={()=>{deleteTodo(no)}} >✖</div>
    </div>
  );
};

export default TodoList;
