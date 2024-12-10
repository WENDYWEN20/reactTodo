import "./App.css";
import React, { useState, useRef, useEffect } from "react";
import TodoList from "./TodoList.js";
import { v4 as uuidv4 } from "uuid";


import {Task} from "./Task.js"

const LOCAL_STORAGE_KEY = "todoApp";
function App() {
  const [todoNow, setTodoTime] = useState("10");
  const increaseTodo = () => {
    setTodoTime(Number(todoNow) + 5);
  };
  const [inputValue, setInputValue] = useState("");
  const [textColor, setTextColor] = useState("green");
  const handleInputChange = (event) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  };
  const [showText, setShowText] = useState(false);

  const [todoLists, setTodoLists] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
    console.log(newTask)
  };
  const addTask = () => {
    // const newTodoList = [...todoLists, newTask];
    // setTodoLists(newTodoList);
    const task={
      id: todoLists.length===0? 1: todoLists[todoLists.length-1].id+1, 
      taskName: newTask
    }
    console.log('Add Task clicked')
    console.log(newTask)
    console.log(task)
    console.log(todoLists)
  setTodoLists([...todoLists, task])
  };
  const deleteTask = (id) => {
    // const newTodoList = 
      // if (task=== taskName) {
      //   return false;
      // } else {
      //   return true;
      // }
     setTodoLists(todoLists.filter((task) => task.id!==id));
  };






  //WEB dev simplified
  const [todos, setTodos] = useState([]); //object destructure

  const todoNameRef = useRef();
  //save todo in Local Storage so to re-render when refresh
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  //localStorage.getItem(LOCAL_STORAGE_KEY) is a string need to be parsed use
  //JSON.parse to convert todos to an array
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function toggleTodo(id) {
    const newTodos = [...todos]; //create a copy instead of modify it directly
    const todoFind = newTodos.find((todoFind) => todoFind.id === id);
    todoFind.complete = !todoFind.complete;
    setTodos(newTodos);
  }
  function handleAddTodo() {
    const addTodoName = todoNameRef.current.value;
    if (addTodoName === "") return;
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        { id: uuidv4(), name: addTodoName, complete: false },
      ];
    });
    todoNameRef.current.value = null; //clear out the input
  }
  function handleClearTodo() {
    const leftTodos = todos.filter((todo) => !todo.complete);
    setTodos(leftTodos);
  }

  return (
    <div className="App">
      <button
        onClick={() => {
          setShowText(!showText);
        }}
      >
        Show / Hide Reference youtube Link
      </button>
      <div>
        {showText === true && (
          <p>
            https://www.youtube.com/watch?v=hQAHSlTtcmY&t=62s
            https://www.youtube.com/watch?v=f55qeKGgB_M
          </p>
        )}
      </div>

      <div>

        <div className="color"> 
          <button
            onClick={() => {
              setTextColor(textColor === "green" ? "red" : "green");
            }}
          >
            change color
          </button>
          <h2 style={{ color: textColor }}>
            {todos.filter((todo) => !todo.complete).length} left to do{" "}
          </h2>
        </div>

        <TodoList todoList={todos} toggleTodo={toggleTodo} />
        <input ref={todoNameRef} type="text"></input>
        <button onClick={handleAddTodo}>Add Todo</button>
        <button onClick={handleClearTodo}>Clear Finished Todo</button>
      </div>

      <div className="increaseTime">
        <button onClick={increaseTodo}> {todoNow}min Increase Time</button>
        <input type="text" onChange={handleInputChange} />
        {inputValue}
      </div>

      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoLists?.map((task) => {
          return 
          (<Task taskName={task.taskName} id={task.id} deleteTask={deleteTask}/>)
        })}
      </div>


    </div>
  );
}

// class ClassCounter extends React.Component{

//   {this.state.count}
//   {this.handleClick}
// }

//this will be triggered when component is mounted(birth)
export default App;
