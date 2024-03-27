import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./component/Vid_048_About";
import Home from "./component/Vid_048_Home";
import NavBar from "./component/Vid_050_Navbar";
import Page404 from "./component/Vid_050_Page404NotFound";

function MyApp() {
  return (
    <div className="App">
      <h1>Router V-6 - 404 Page Not Found Example</h1>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Handling Page 404 Not Found by Error Page*/}
          <Route path="/*" element={<Page404 />} />
          {/* Handling Page 404 Not Found by Navigate/Redirect (TO HOME PAGE)*/}
          <Route path="/redirect" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MyApp;
