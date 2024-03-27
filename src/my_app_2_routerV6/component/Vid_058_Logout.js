import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const color = "antiquewhite";
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("login");
    navigate("/");
  };

  return (
    <Fragment>
      <div style={{ backgroundColor: color }}>
        <h2>Logout Page</h2>
        <button onClick={logout}>Logout</button>
      </div>
    </Fragment>
  );
}

export default Logout;
