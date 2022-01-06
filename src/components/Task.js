import "./Task.css";
import React, { useState } from "react";

const Task = ({ task, onTglStatus }) => {
  const [style, setStyle] = useState("cont");
  const changeStyle = () => {
    setStyle("cont2");
  };

  return (
    <div key={task.id}>
      <div className={style}>
        <div>
          {`Name:- ${task.name}`}
          <br />
          {`Contact :-${task.contact}`}
        </div>
        <div>
          <span onClick={changeStyle}>
            <button onClick={() => onTglStatus(task)}>delete</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Task;
