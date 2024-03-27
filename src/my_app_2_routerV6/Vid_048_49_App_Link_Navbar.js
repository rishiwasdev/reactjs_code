import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./component/Vid_048_About";
import Home from "./component/Vid_048_Home";
import NavBar from "./component/Vid_049_Navbar";

function MyApp() {
  return (
    <div className="App">
      <h1>Router version-6 Intro</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

        {/* <Link to="/">Home</Link>&emsp;<Link to="/">About</Link> */}
        {/* <Link> (& Link/Router related components) should be under <BrowserRouter> */}
        {/* USING below REUSABLE component NavBar instead */}
        <NavBar />
        <b style={{ backgroundColor: "yellow", color: "red" }}>REUSE:</b>
        <NavBar />
      </BrowserRouter>
    </div>
  );
}

export default MyApp;
