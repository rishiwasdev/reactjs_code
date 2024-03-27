import { BrowserRouter as MyRouter, Route, Routes } from "react-router-dom";
import NavBar from "./component/Vid_052_NavBar_NavLink_UL";
import About from "../component_general/MyAbout";
import MyHome from "../component_general/MyHome";
import MyPage404 from "../component_general/MyPage404";

function MyApp() {
  return (
    <div>
      <h1>Link and NavLink Style</h1>
      {/* BrowserRouter is declared/renamed as MyRouter (See Line 1). */}
      <MyRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<MyHome />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<MyPage404 />} />
        </Routes>
      </MyRouter>
    </div>
  );
}

export default MyApp;
