import React, { useState } from "react";
import User from "./component/Vid_024_User_LC2_Render";

/** Usage of the NEXT LIFECYCLE METHOD of ReactJS, 'render'.
 * Render means: to present (after some execution in ReactJS).
 * render method:
    - is used in a Class component
    - has All HTML part
    - re-render in case of any changes in HTML (any state or prop changes)
 * render method is called when:
    - component created (constructed)
    - state updated
    - props updated
 * state SHOULD NOT be dierectly updated in render(), through event (e.g. btn click) is different thing.
 * In below example, render is defined in component 'User' (that is a Class component)
*/
function MyApp() {
  const [naam, setNaam] = useState("RISHI");

  return (
    <div className="App">
      <h2>ReactJS Lifecycle method - 02: render </h2>

      <User name={naam} />
      {/* clicking below button changes state, => render called every time */}
      <button onClick={() => setNaam(naam === "NAVI" ? "RISHI" : "NAVI")}>
        Change prop.name
      </button>
      <br />
      <br />
      <h5>(Check console for render calls)</h5>
    </div>
  );
}

export default MyApp;
