import { NavLink } from "react-router-dom";
import style from "../../my_css/my_style.module.css";
// import "../my_css/my_style.module.css"; // NOT WORKING

/** DO NOT give classname inside <Link ...> tag, may cause errors
 * <Link to="/">Home</Link>
 * So we are using <NavLink> in below example.
 */

function NavBar() {
  return (
    <div style={{ backgroundColor: "beige" }}>
      <ul className={style.navbar}>
        <li>
          <NavLink className={style.navbar_link} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={style.navbar_link} to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className={style.navbar_link} to="/nonexist">
            A-Non-Existing-Page
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
