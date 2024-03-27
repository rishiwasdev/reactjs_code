import { Fragment } from "react";
import { Link } from "react-router-dom";

function MyHome() {
  const color = "lightcyan";
  return (
    <Fragment>
      <h2 style={{ backgroundColor: color }}>Home Page</h2>
      <p> This is our home page. </p>
      <p>
        corporis ducimus libero perferendis!
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <br />
        Nostrum animi natus placeat illum quae neque temporibus,
      </p>
      <p style={{ backgroundColor: color }}>
        Go to <Link to="/about">About</Link> page.
      </p>
    </Fragment>
  );
}

export default MyHome;
