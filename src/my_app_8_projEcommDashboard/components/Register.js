import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/add"); // if LOGGED-IN user enters bookmarked/register uri, redirect to Add Product
    }
  }, [navigate]); // empty array => runs 1 time, variable => on chhange of value

  async function signUp() {
    let creds = { name, email, password };
    // console.info(creds);
    let resultObj = await fetch("http://localhost:8080/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(creds),
    });
    let result = await resultObj.json();
    console.log(result);
    localStorage.setItem("user-info", JSON.stringify(result.data));
    navigate("/add");
  }

  return (
    <>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        {/* => 6 cols after 3 col offset/gap*/}
        <h2>User Sign Up</h2>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
        />
        <br />
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email  "
        />
        <br />
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <br />
        <button className="btn btn-primary" onClick={signUp}>
          Sign Up
        </button>
      </div>
    </>
  );
}

export default Register;
