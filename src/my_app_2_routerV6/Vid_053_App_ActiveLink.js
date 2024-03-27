import { BrowserRouter as MyRouter, Route, Routes } from "react-router-dom";
import About from "../component_general/MyAbout";
import MyHome from "../component_general/MyHome";
import MyPage404 from "../component_general/MyPage404";
import NavBar from "./component/Vid_053_NavBar_ActiveLink";
import { Fragment } from "react";

function MyApp() {
  return (
    <Fragment>
      <h1>Active Link Highlighting</h1>
      <MyRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<MyHome />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<MyPage404 />} />
        </Routes>
      </MyRouter>
    </Fragment>
  );
}

export default MyApp;
