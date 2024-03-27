import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div style={{ backgroundColor: "beige", margin: 10 }}>
      {/* ----------As Normal Links----------- */}
      <b>NavBar:</b>&emsp;&emsp;
      <Link to="/">Home</Link>&emsp;<Link to="/about">About</Link>&emsp;
      <Link to="/redirect">PageNotAvailable-gotoHome</Link>&emsp;
      <Link to="/abc">PageNotAvailable-Default1</Link>&emsp;
      <Link to="/xyz">PageNotAvailable-Default2</Link>
      <hr />
    </div>
  );
}

export default NavBar;
