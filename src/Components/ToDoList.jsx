import React from 'react'
import {ToDoItems} from './ToDoItems'

export function ToDoList({todos, toggleTodo}) {
  return (
    <ul>
        {todos.map((todo) => (
            <ToDoItems key={todo.id} todo={todo} toggleTodo={toggleTodo}></ToDoItems>
        ))}
    </ul>
  )
}
 