import { Link } from "react-router-dom";

function MyNavBar() {
  return (
    <div style={{ backgroundColor: "beige", margin: 10 }}>
      <h3>NavBar</h3>
      <Link to="/">Home</Link>&emsp;<Link to="/about">About</Link>&emsp;
      <Link to="/nonexist">A-Non-Existing-Page</Link>
    </div>
  );
}

export default MyNavBar;
