import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import User from "./component/Vid_062_User";

function MyApp() {
  let users = [
    { id: 1, name: "Abc", email: "a@xyz.com" },
    { id: 2, name: "Def", email: "d@xyz.com" },
    { id: 3, name: "Ghi", email: "g@xyz.com" },
    { id: 4, name: "Jkl", email: "j@xyz.com" },
    { id: 5, name: "Mno", email: "m@xyz.com" },
  ];

  return (
    <div className="App">
      <Router>
        <h1>Dynamic Routing</h1>
        <Link to="/">
          <h4>Home</h4>
        </Link>
        {users.map((item, id) => (
          <div key={id}>
            <Link to={"/user/" + item.id+"/"+item.name}>
            <h4>{item.id}</h4>
            </Link>
          </div>
        ))}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id/:name" element={<User />} />
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

export default MyApp;
