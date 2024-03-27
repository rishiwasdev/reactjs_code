import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";

// Hook: useNavigate: to navigate on clicking button, function calling
function Home() {
  const color = "lightcyan";
  const navigate = useNavigate();
  const navToPage = (toRoute) => {
    // let x = true; x ? navigate("/about") : navigate("/filter");
    navigate(toRoute);
  };

  return (
    <Fragment>
      <h2 style={{ backgroundColor: color, padding: 5 }}>Home Page</h2>
      <p> This is our home page. </p>
      <p style={{ backgroundColor: color, padding: 5 }}>
        Go to <Link to="/about">About</Link> page using link.
      </p>
      <div
        style={{
          backgroundColor: "beige",
          display: "inline-block",
          margin: "auto",
          justifyContent: "center",
        }}
      >
        <div>Go to About & Filter pages using buttons (below).</div>
        <div>
          <h3>Function(inline):</h3>
          <button onClick={() => navigate("/about")}>About Page</button>&emsp;
          <button onClick={() => navigate("/filter")}>Filter Page</button>&emsp;
          <h3>Function(outside):</h3>
          <button onClick={() => navToPage("/about")}>About Page</button>&emsp;
          <button onClick={() => navToPage("/filter")}>Filter Page</button>
          &emsp;
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
