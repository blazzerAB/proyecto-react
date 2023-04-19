import React, { useState } from "react";
import { FaRegTrashAlt, FaArrowUp } from "react-icons/fa";
import {v4 as uuidv4} from "uuid"

export function ListInput({ejecutar, addValidate}) {
  const [add, setAdd] = useState([]);
  // const [testChage, setTeskChange] = useState("")

  const taskAdd = (task) => {
    console.log("Tarea agreda")
    console.log(task)
  };

  const newTask = {
    id: uuidv4(),
    text: add,
    completed: false
  }

  return (
    <div>
      <form className="taskDivForm">
        <input className="taskInput" type="text" placeholder="New task..." onChange={
          (e) => setAdd(e.target.value) }/>
        <div className="taskButton" onClick={
          () => {
            ejecutar(add)
            taskAdd(newTask)
            addValidate()
          }
        }>
          <FaArrowUp />
        </div>
      </form>
    </div>
  );
}

export function ListTasks({
  id,
  taskText,
  completed,
  completedTask,
  deleteTask,
  addValid,
  deleteList,
}) {
  // const killerTask = val => {
  //   console.log("Eliminar");
  // };

  if (!addValid) {
    return (
      <div className={completedTask ? "taskDiv" : "taskDiv taskDivCompleted"}>
        <div className="taskText" onClick={() => completed(id)}>
          {taskText}
        </div>
  
        <div onClick={
          () => {
            // killerTask()
            deleteList()
          }
        }>
          <FaRegTrashAlt className="taskIcon" />
        </div>
      </div>
    );
  }
}
