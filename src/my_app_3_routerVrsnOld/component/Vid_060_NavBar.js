import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div style={{ backgroundColor: "beige", margin: 10 }}>
      <h3>NavBar</h3>
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
    </div>
  );
}

export default NavBar;
