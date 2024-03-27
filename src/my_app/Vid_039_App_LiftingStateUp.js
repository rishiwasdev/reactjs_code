import { Fragment } from "react";
import User from "./component/Vid_039_User_LiftingStateUp";

/**
 * Lifting State Up:
 * - Sending Child data to Parent
 * - NOT a part of advanced React
 * - NOT about the state of the component
 * - We'll create a function in Parent, pass to Child through props, & call there.
 */
function MyApp() {
  function parentAlert(data) {
    console.log(data);
    alert("Hello " + data.name + "!");
  }

  return (
    <Fragment>
      <h2>Lifting State Up Example</h2>
      <User alert={parentAlert} />
    </Fragment>
  );
}

export default MyApp;
