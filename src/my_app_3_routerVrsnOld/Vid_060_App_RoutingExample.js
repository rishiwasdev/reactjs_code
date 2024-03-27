import { Route, Routes } from "react-router-dom";
import About from "../component_general/MyAbout";
import Home from "../component_general/MyHome";
import NavBar from "./component/Vid_060_NavBar";

/** Made changes in index.js(CHECK IT):
 * - App.js wrapped in BrowserRouter (FOR THIS EXAMPLE)
 */
function MyApp() {
  return (
    <div className="App">
      <h1>Routing Setup</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

/**Putting below in separate files, works here too but better to separate. */
// function Home() {
//   const color = "lightcyan";
//   return (
//     <div>
//       <h2 style={{ backgroundColor: color }}>Home Page</h2>
//       <p> This is our home page. </p>
//       <p>
//         corporis ducimus libero perferendis!
//         <br />
//         Lorem ipsum dolor sit amet consectetur adipisicing elit.
//       </p>
//     </div>
//   );
// }

// function About() {
//   const color = "lightgreen";
//   return (
//     <div>
//       <h2 style={{ backgroundColor: color }}>About Page</h2>
//       <p>This is our About page.</p>
//       <p>
//         At sapiente alias nam aperiam sequi minus!
//         <br />
//         Esse delectus dolores repellat officiis!
//       </p>
//     </div>
//   );
// }

export default MyApp;
