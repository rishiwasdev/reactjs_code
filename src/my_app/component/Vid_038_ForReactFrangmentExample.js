import { Fragment } from "react";
import "../../my_css/Vid_032_style1.css";

function Cols(prop) {
  return (
    // Use <Fragment>  OR <React.Fragment>  OR just <>
    <Fragment>
      {/* * We need to use Fragment. Using <div> instead of <Fragment> causes
       * ERROR: <div> cannot appear as a child of <tr>
       */}
      <td style={{ border: "1px solid black" }}>Abc</td>
      <td style={{ border: "1px solid black" }}>Def</td>
      <td style={{ border: "1px solid black" }}>Ghi</td>
      <td style={{ border: "1px solid black" }}>Jkl</td>
      <td style={{ border: "1px solid black" }}>Mno</td>
    </Fragment>
  );
}

export default Cols;
