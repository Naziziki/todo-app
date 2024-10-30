import "./AppBar.style.css";

import AppBarMenuIcon from "../Icons/AppBarMenuIcon";

function AppBar() {
  return (
    <div className="AppBar">
      <button className="AppBar__Button">
        <AppBarMenuIcon />
      </button>
      <div className="AppBar__Header">Home</div>
    </div>
  );
}

export default AppBar;
