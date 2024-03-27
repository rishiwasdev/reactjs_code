import { Fragment } from "react";
import { BrowserRouter as MyRouter, Route, Routes } from "react-router-dom";
import Filter from "./component/Vid_054_hook_useSearchParams";
import NavBar from "./component/Vid_056_NavBar";
import Contact from "./component/Vid_056_Route1_Contact";
import Channel from "./component/Vid_056_Route2_Channel";
import Company from "./component/Vid_056_Route2_Company";
import Other from "./component/Vid_056_Route2_Other";
import About from "../component_general/MyAbout";
import Home from "../component_general/MyHome";
import MyPage404 from "../component_general/MyPage404";

/**Nested Routes defined under <Route path="/contact/"...} below />. OBSERVE THE SLASH (/) after contact */
function MyApp() {
  return (
    <Fragment>
      <h1>Learn Nested Routing</h1>
      <h3>Go to Contact page to learn.</h3>
      <MyRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/contact/" element={<Contact />}>
            <Route path="company" element={<Company />} />
            <Route path="channel" element={<Channel />} />
            <Route path="other" element={<Other />} />
          </Route>
          <Route path="/*" element={<MyPage404 />} />
        </Routes>
      </MyRouter>
    </Fragment>
  );
}

export default MyApp;
