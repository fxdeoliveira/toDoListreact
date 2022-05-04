import React from 'react'

export function ToDoItems({todo, toggleTodo}) {
    const { id, task, completed} = todo;
    const handelToDoClick = () => {
        toggleTodo(id);
    }
  return (
    <li>
        <input type="checkbox" checked={completed} onChange={handelToDoClick}/>
    {task}
    </li>
  )
}
