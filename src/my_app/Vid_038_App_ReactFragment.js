import { Fragment } from "react";
import Cols from "./component/Vid_038_ForReactFrangmentExample";

/**
 * ReactFragment is part of advanced React
 * ReactFragment: a pattern to handle multiple React components or elements of HTML.
 * import { Fragment } from "react";
 * Use <Fragment>...</Fragment> or Empty Tag <>...</>
 * We CANNOT use className in <Fragment> tag, we CAN use key.
 */
function MyApp() {
  return (
    // Use <Fragment>  OR <React.Fragment>  OR just <>
    <Fragment>
      <h2>React Fragment</h2>
      <table border="1" align="center">
        <tbody>
          <tr>
            {/* if <div> used in 'Cols' for <td> elements, it'll cause
             * ERROR: <div> cannot appear as a child of <tr> */}
            <Cols />
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
}

export default MyApp;
