import { Fragment } from "react";
import { BrowserRouter as MyRouter, Route, Routes } from "react-router-dom";
import NavBar from "./component/Vid_054_NavBar_Filter";
import Filter from "./component/Vid_054_hook_useSearchParams";
import Home from "./component/Vid_055_Home";
import About from "../component_general/MyAbout";
import MyPage404 from "../component_general/MyPage404";

// Hook: useNavigate: to navigate on clicking button, function calling
function MyApp() {
  return (
    <Fragment>
      <h1>
        Learn Router Hook - useNavigate: Learn Navigating Programmitacally
      </h1>
      <h3>
        Go to Home page to learn (navigate on clicking button, function calling)
      </h3>
      <MyRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/*" element={<MyPage404 />} />
        </Routes>
      </MyRouter>
    </Fragment>
  );
}

export default MyApp;
