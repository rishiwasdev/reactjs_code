import { NavLink } from "react-router-dom";

/** DO NOT give classname inside <Link ...> tag, may cause errors
 * <Link to="/">Home</Link>
 * So we are using <NavLink> in below example.
 */

function NavBar() {
  return (
    // <div style={{ backgroundColor: "beige", textAlign: "right" }}>
    //   <ul className="navbar" style={{ display: "inline-block" }}>
    // OR BELOW 2 lines
    <div style={{ backgroundColor: "beige" }}>
      <ul className="navbar" style={{ display: "block" }}>
        <li>
          <NavLink className="navbar_link" to="/">
            {/* ODD way of achieving active link for this: */}
            {/* <NavLink
            className="navbar_link"
            to="/"
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "yellow" : "red" };
            }}
          > */}
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar_link" to="/about">
            About
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
