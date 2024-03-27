import { Fragment } from "react";
import { Link } from "react-router-dom";

function MyPage404() {
  return (
    <Fragment>
      <h2 style={{ backgroundColor: "red" }}>Page 404 Not Found</h2>
      <p>
        <b>The page you are looking for does not exist.</b>
      </p>

      <p style={{ backgroundColor: "lightgreen" }}>
        Go to <Link to="/">Home</Link> page.
      </p>
    </Fragment>
  );
}

export default MyPage404;
