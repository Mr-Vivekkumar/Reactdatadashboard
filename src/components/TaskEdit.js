import React, { useState } from "react";

function TaskEdit({ task, onSaveTask }) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

  const saveTask = (e) => {
    e.preventDefault();
    onSaveTask({
      name: name,
      contact: contact
    });

    setName("");
    setContact("");
  };
  return (
    <div className="card">
      <form>
        <span>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </span>
        <span>
          <label htmlFor="contact">Contact</label>
          <input
            type="text"
            name="contact"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </span>
        <button className="button dark" onClick={saveTask}>
          ADD
        </button>
      </form>
    </div>
  );
}

export default TaskEdit;
