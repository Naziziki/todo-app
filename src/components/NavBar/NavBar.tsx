import "./NavBar.style.css";
import HomeIcon from "../Icons/HomeIcon";

export default function NavBar() {
  return (
    <div>
      <div className="NavBar">
        <button className="NavBar__button">
          <HomeIcon />
          <div>Home</div>
        </button>
        <button className="NavBar__button">
          <HomeIcon />
          <div>Tracker</div>
        </button>
        <button className="NavBar__button">
          <HomeIcon />
          <div>Settings</div>
        </button>
      </div>
    </div>
  );
}
