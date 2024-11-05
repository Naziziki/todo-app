import "./TaskList.style.css";

import IconButton from "@mui/material/IconButton";

import DeleteIcon from "../Icons/DeleteIcon";
import Checkbox from "../Checkbox/Checkbox";

const tasks = [
  {
    title: "Hello",
    description: "world",
  },
  {
    title: "Buy milk",
    description: "buy some milk",
  },
];


export default function TaskList() {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <div key={index} className="task-item">
          <div className="checkbox-container">
            <Checkbox id={task.title} />
            <label htmlFor={task.title}>
              <span className="task-title">{task.title}</span>
              <span className="task-subtitle">{task.description}</span>
            </label>
          </div>
          <IconButton color='error'>
            <DeleteIcon />
          </IconButton>
        </div>
      ))}
    </div>
  );
} 