import { Fragment } from "react";
import { BrowserRouter as MyRouter, Route, Routes } from "react-router-dom";
import {} from "react-router-dom";
import About from "../component_general/MyAbout";
import MyHome from "../component_general/MyHome";
import MyPage404 from "../component_general/MyPage404";
import NavBar from "./component/Vid_054_NavBar_Filter";
import Filter from "./component/Vid_054_hook_useSearchParams";

function MyApp() {
  return (
    <Fragment>
      <h1>Learn Router Hook - useSearchParams</h1>
      <MyRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<MyHome />} />
          <Route path="/about" element={<About />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/*" element={<MyPage404 />} />
        </Routes>
      </MyRouter>
    </Fragment>
  );
}

export default MyApp;
