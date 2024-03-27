import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./component/Vid_048_About";
import Home from "./component/Vid_048_Home";
import Page404 from "./component/Vid_050_Page404NotFound";
import UserInfo from "./component/Vid_051_UserInfo";
import User from "./component/Vid_051_User";
import NavBar from "./component/Vid_051_Navbar";

function MyApp() {
  return (
    <div className="App">
      <h1>Routing - Dynamic Routing with Params</h1>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user" element={<User />} />
          <Route path="/user-info" element={<UserInfo />} />
          <Route path="/user-info/:name" element={<UserInfo />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MyApp;
