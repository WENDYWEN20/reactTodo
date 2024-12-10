import React from 'react'
import Todo from './Todo.js'

export default function TodoList({todoList, toggleTodo}) {
  return (

todoList.map(todo=>{
  return <Todo key={todo.name} todo={todo} toggleTodo={toggleTodo}/>})
  )
}
