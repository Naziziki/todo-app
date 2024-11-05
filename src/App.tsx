import "./css/main.css";
import "./css/_variables.css";

import MainButton from "./components/Button/Button";
import TaskList from "./components/TaskList/TaskList";

import AppBar from "./components/AppBar/AppBar";
import NavBar from "./components/NavBar/NavBar";

export default function App() {
  return (
    <div className="App">
      <AppBar />
      <div className="todo-header_container">
        <div className="todo-header__title">ToDo's </div>
        <MainButton label="add task" />
      </div>
      <TaskList />
      <NavBar />
    </div>
  );
}
