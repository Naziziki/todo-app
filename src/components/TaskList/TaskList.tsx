import "./TaskList.style.css";
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

function TaskList() {
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
          <button className="button_delete-task">
            <DeleteIcon />
          </button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
