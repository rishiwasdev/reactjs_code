import { useState } from "react";

export default function Profile() {
  let salute = "Welcome";
  const [loggedIn, setLoggedIn] = useState(2);

  // --------- BELOW: NOT RECOMMENDED
  // if (loggedIn) { return (<div>  <h1>Welcome User</h1> </div>) }
  // else          { return (<div>  <h1>Welcome Guest</h1> </div>) }

  return (
    <div style={{ margin: 10 }}>
      <h3>Profile Component</h3>
      {salute}{" "}
      <b>{loggedIn === 1 ? "Admin" : loggedIn === 2 ? "User" : "Guest"}!</b>
    </div>
  );
}
