import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/add"); // if LOGGED-IN user enters bookmarked/register uri, redirect to Add Product
    }
  }, [navigate]); // empty array => runs 1 time, variable => on chhange of value

  return (
    <>
      <Header />
      <div>
        <h2>Login Page</h2>
      </div>
    </>
  );
}

export default Login;
