import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";

/**
 * Hook: useLocation: to get what we have when we go to a Route.
 */
function Home() {
  const color = "lightcyan";
  const location = useLocation();
  console.log(location);

  return (
    <Fragment>
      <div style={{ backgroundColor: color, padding: 5 }}>
        <h2>Home Page</h2>
        <p style={{ backgroundColor: color, padding: 5 }}>
          Go to <Link to="/about">About</Link> page using link.
        </p>
      </div>
    </Fragment>
  );
}

export default Home;
