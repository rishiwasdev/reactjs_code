import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div style={{ backgroundColor: "beige" }}>
      <ul className="navbar" style={{ display: "block" }}>
        <li>
          <NavLink className="navbar_link" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar_link" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar_link" to="/filter">
            Filter
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar_link" to="/contact">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar_link" to="/nonexist">
            A-Non-Existing-Page
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
