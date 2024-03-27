import React from "react";
import User from "../components/Vid_076_User";

/** Simple Example of props in Components.
 * Have learnt before, it's a revision.
 * Props in REDUX in NEXT EXAMPLE
 */
function MyApp() {
  return (
    <div>
      <h2>App Component!</h2>
      <User data={{ name: "Abc Def", age: 30 }} />
    </div>
  );
}

export default MyApp;
