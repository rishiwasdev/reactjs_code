import { Link } from "react-router-dom";

function UserInfo() {
  const color = "antiquewhite";
  return (
    <div>
      <h2 style={{ backgroundColor: color }}>User Page</h2>
      <h6>Click a user to see contacts:</h6>
      <Link to="/user-info">Guest User</Link>
      <br />
      <Link to="/user-info/Navi">Navi</Link>
      <br />
      <Link to="/user-info/Rishi">Rishi</Link>
      <br />
      <p style={{ backgroundColor: color }}>
        Go to <Link to="/">Home</Link> page.
      </p>
    </div>
  );
}

export default UserInfo;
