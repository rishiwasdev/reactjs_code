import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./component/Vid_048_About";
import Home from "./component/Vid_048_Home";
import Page404 from "./component/Vid_050_Page404NotFound";
import NavBar from "./component/Vid_058_Navbar";
import Protected from "./component/Vid_058_Protected";
import Login from "./component/Vid_058_Login";
import Logout from "./component/Vid_058_Logout";

function MyApp() {
  return (
    <div className="App">
      <h1>Protected Routing</h1>

      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* BELOW: Home component is loaded using MyComponent reference, via Protected component */}
          <Route path="/" element={<Protected MyComponent={Home} />} />
          <Route path="/about" element={<Protected MyComponent={About} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Protected MyComponent={Logout} />} />
          <Route path="/*" element={<Protected MyComponent={Page404} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MyApp;
