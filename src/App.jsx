import React, { useState, useRef, useEffect } from "react";
import { ToDoList } from "./Components/ToDoList";
import { v4 as uuidv4 } from "uuid";

export function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: "Tarea 1", completed: false },
  ]);
  const todoTaskRef = useRef();

  const KEY = "todoApp.todos";

  useEffect(()=>{
      const storTodos = JSON.parse(localStorage.getItem(KEY));
      if(storTodos){
          setTodos(storTodos)
      }
  })

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(todos));
    
  }, [todos]);

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };
  const handelToDoADD = () => {
    const task = todoTaskRef.current.value;
    if (task === "") return;

    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), task, completed: false }];
    });
    todoTaskRef.current.value = null;
  };

  const deleteToDo = () => {

  };

  return (
    <>
      <ToDoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoTaskRef} type="text" placeholder="Tarea"></input>
      <button onClick={handelToDoADD}>Agregar</button>
      <button onClick={deleteToDo}>Eliminar</button>
      <div>
        Te quedan {todos.filter((todo) => !todo.completed).length} tareas por
        completar
      </div>
    </>
  );
}
