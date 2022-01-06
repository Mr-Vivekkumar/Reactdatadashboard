import React from "react";
import Task from "./Task";

function Tasks({ tasks, onTglStatus }) {
  return (
    <>
      {tasks.map((task) => (
        <span key={task.id}>
          <Task task={task} onTglStatus={onTglStatus} />
        </span>
      ))}
    </>
  );
}

export default Tasks;
