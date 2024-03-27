import { Fragment } from "react";
import { Link } from "react-router-dom";

function MyAbout() {
  const color = "lightgreen";
  return (
    <Fragment>
      <h2 style={{ backgroundColor: color }}>About Page</h2>
      <p>This is our About page.</p>
      <p>
        At sapiente alias nam aperiam sequi minus!
        <br />
        Esse delectus dolores repellat officiis!
        <br />
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </p>
      <p style={{ backgroundColor: color }}>
        Go to <Link to="/">Home</Link> page.
      </p>
    </Fragment>
  );
}

export default MyAbout;
