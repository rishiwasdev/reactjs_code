import { Fragment } from "react";
import { BrowserRouter as MyRouter, Route, Routes } from "react-router-dom";
import NavBar from "./component/Vid_051_Navbar";
import Home from "./component/Vid_057_Home";
import User from "./component/Vid_057_User";
import UserInfo from "./component/Vid_057_UserInfo";
import About from "../component_general/MyAbout";
import Page404 from "../component_general/MyPage404";

/**
 * Hook: useLocation. Learn: pathname, state, hash, search etc
 * Gives: { pathname: '/path', search: '', hash: '', state: null, key: 'some_unique_value' }
 * - search: contains what is passed as search query param in URI
 * - path: contains value of path
 * - hash: contains value sent as, e.g. localhost:3030/#hashValue. can be used as hash routes.
 * - state: CHECK, sending state in User for Guest. will be logged in state (check console logs)
 */
function MyApp() {
  return (
    <Fragment>
      <h1>Learn Hook: useLocation</h1>
      <MyRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user" element={<User />} />
          <Route path="/user-info" element={<UserInfo />} />
          <Route path="/user-info/:name" element={<UserInfo />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </MyRouter>
    </Fragment>
  );
}

export default MyApp;
