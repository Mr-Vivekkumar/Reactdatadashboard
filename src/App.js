import { useState } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import TaskEdit from "./components/TaskEdit";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Vivek",
      contact: "9867859543",
      complete: false
    },
    {
      id: 2,
      name: "Bipin",
      contact: "7506071142",
      complete: false
    },
    {
      id: 3,
      name: "Monu",
      contact: "123456789",
      complete: false
    }
  ]);

  const onTglStatus = (task) => {
    console.log("Deleting task", task);
    setTasks(
      tasks.map((chkTask) => {
        chkTask.complete =
          task.id === chkTask.id ? !chkTask.complete : chkTask.complete;
        return chkTask;
      })
    );
  };

  const onSaveTask = ({ name, contact }) => {
    console.log("saving tasks");
    setTasks([
      { name: name, contact: contact, id: Date.now(), complete: false },
      ...tasks
    ]);
  };

  return (
    <div>
      <Header />
      <div>
        <TaskEdit task={{}} onSaveTask={onSaveTask} />
        <Tasks tasks={tasks} onTglStatus={onTglStatus}></Tasks>
      </div>
    </div>
  );
}

export default App;
