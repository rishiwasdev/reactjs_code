import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

/** Component used as pages through links. Different pages for different funcionalities.
 * Below is Router version 5 examples, SO MIGHT NOT WORK
 * Use <Routes> instead of <Switch>
 */
function MyApp() {
  return (
    <div className="App">
      <h1>Routing Setup</h1>
      <Router>
        <Link to="/home">Home</Link>
        &emsp;<Link to="/about">About</Link>
        &emsp;<Link to="/ABC">Page404Test-1</Link>
        &emsp;<Link to="/XYZ">Page404Test-2</Link>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Error Page if any other path */}
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </Router>
    </div>
  );
}

function Home() {
  const color = "lightcyan";
  return (
    <div>
      <h2 style={{ backgroundColor: color }}>Home Page</h2>
      <p> This is our home page. </p>
      <p>
        corporis ducimus libero perferendis!
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
}

function About() {
  const color = "lightgreen";
  return (
    <div>
      <h2 style={{ backgroundColor: color }}>About Page</h2>
      <p>This is our About page.</p>
      <p>
        At sapiente alias nam aperiam sequi minus!
        <br />
        Esse delectus dolores repellat officiis!
      </p>
    </div>
  );
}

function Page404() {
  return (
    <div>
      <h2 style={{ backgroundColor: "red" }}>Page 404 Not Found</h2>
      <p>
        <b>The page you are looking for does not exist.</b>
      </p>

      <p style={{ backgroundColor: "lightgreen" }}>
        Go to <Link to="/">Home</Link> page.
      </p>
    </div>
  );
}

export default MyApp;
