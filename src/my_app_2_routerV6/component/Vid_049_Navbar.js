import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div style={{ backgroundColor: "beige", margin: 10 }}>
      <h3>NavBar</h3>
      {/* ----------As Normal Links----------- */}
      {/* <b>Link Tags (PAGE NOT REFRESHED using Link, REQUIRED)</b><br />
      <Link to="/">Home</Link>&emsp; <Link to="/about">About</Link><hr/> */}
      {/* ----------Using Anchor Tag----------- */}
      <div style={{ textAlign: "center" }}>
        <b>Anchor tag (PAGE REFRESHED (SO NOT A Single Page Application))</b>
        <br />
        <a href="/">Home</a>
        <br />
        <a href="/about">About</a>
        <hr />
      </div>
      {/* ----------Using Unordered List----------- */}
      <div style={{ textAlign: "center" }}>
        <b>Unordered List (PAGE NOT REFRESHED using Link, REQUIRED)</b>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
