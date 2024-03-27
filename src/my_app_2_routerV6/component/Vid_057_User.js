import { Link, useLocation } from "react-router-dom";

/**
 * Hook: useLocation: to get what we have when we go to a Route.
 * Gives: { pathname: '/path', search: '', hash: '', state: null, key: 'some_value' }
 * On Page, Click: User
 * - path: contains the pathname: /user-info
 * - state: sending state for Guest below. will be logged in state (check console logs)
 */
function User() {
  const color = "antiquewhite";
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <h2 style={{ backgroundColor: color }}>User Page</h2>
      <h6>Click a user to see contacts:</h6>
      <Link to="/user-info" state={{ name: "Abc Def", age: 30 }}>
        Guest User
      </Link>
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

export default User;
