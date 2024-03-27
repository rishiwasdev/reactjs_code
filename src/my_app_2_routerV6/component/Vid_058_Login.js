import { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const color = "antiquewhite";
  const navigate = useNavigate();
  const login = () => {
    // e.preventDefault();
    localStorage.setItem("login", true);
    navigate("/");
  };

  useEffect(() => {
    let loginStatus = localStorage.getItem("login");
    if (loginStatus) {
      navigate("/");
    }
  });

  return (
    <Fragment>
      <div style={{ backgroundColor: color }}>
        <h2>Login Page</h2>
        <input type="text" />
        <br /> <br />
        <input type="text" />
        <br /> <br />
        <button onClick={login}>Login</button>
      </div>
    </Fragment>
  );
}

export default Login;
