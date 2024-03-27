import { Link } from "react-router-dom";

function Page404() {
  return (
    <div style={{ backgroundColor: "beige" }}>
      <h2 style={{ backgroundColor: "red" }}>Page 404 Not Found</h2>
      <p>
        <b>The page you are looking for does not exist.</b>
      </p>

      <p style={{ backgroundColor: "lightgreen" }}>
        Go to <Link to="/">Home</Link> page.
      </p>
    </div>
  );
}

export default Page404;
