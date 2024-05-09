import { Link, useNavigate } from "react-router-dom";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

function Header() {
  const user = JSON.parse(localStorage.getItem("user-info"));
  const navigate = useNavigate();
  // console.log(user);

  function logout() {
    localStorage.clear();
    navigate("/login");
  }

  return (
    <div>
      {/* <h6>Header Page</h6> */}
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto nav_bar_wrapper">
            {
              // if LOGGED-IN
              localStorage.getItem("user-info") ? (
                <>
                  <Link to="/">Product List</Link>
                  <Link to="/add">Add Product</Link>
                  <Link to="/update">Update Product</Link>
                  <Link to="/search">Search Product</Link>
                </>
              ) : (
                // if NOT LOGGED-IN
                <>
                  <Link to="/login">Login</Link>
                  <Link to="/register">Register</Link>
                </>
              )
            }
          </Nav>
          {user && (
            <Nav>
              <NavDropdown title={user.name}>
                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                <NavDropdown.Item>Profile</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          )}
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
