import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div style={{ backgroundColor: "beige", margin: 10 }}>
      {/* ----------As Normal Links----------- */}
      <Link to="/">Home</Link>&emsp;<Link to="/about">About</Link>&emsp;
      <Link to="/user">User</Link>&emsp;
      <Link to="/nonexist">A-Non-Existing-Page</Link>
      <hr />
    </div>
  );
}

export default NavBar;
