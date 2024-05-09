import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { Button } from "react-bootstrap";

// Functionality: VIDEO 91
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/add"); // if LOGGED-IN user enters bookmarked/register uri, redirect to Add Product
    }
  }, [navigate]); // empty array => runs 1 time, variable => on chhange of value

  async function login() {
    let creds = { email, password }; //console.log(email, password);
    let resp = await fetch("http://localhost:8080/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(creds),
    });
    let result = await resp.json();
    localStorage.setItem("user-info", JSON.stringify(result.data));
    navigate("/");
  }

  return (
    <div>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <h2>Login Page</h2>
        <input
          type="email"
          className="form-control"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          className="form-control"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <Button className="btn btn-primary" onClick={login}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
