import { Link } from "react-router-dom";
import "../my_css/my_style_for_ease.css";

function MyNavBarUL() {
  return (
    <div style={{ backgroundColor: "beige" }}>
      <h3>NavBar</h3>
      <ul className="navbar">
        <li className="navbar">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar">
          <Link to="/about">About</Link>
        </li>
        <li className="navbar">
          <Link to="/nonexist">A-Non-Existing-Page</Link>
        </li>
      </ul>
    </div>
  );
}

export default MyNavBarUL;
