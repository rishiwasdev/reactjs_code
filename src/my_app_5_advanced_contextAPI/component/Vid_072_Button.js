import React from "react";
import { CommonContext } from "./Vid_072_CommonContext";

function Button() {
  const clr1 = "Beige";
  const clr2 = "LightYellow";
  const clr3 = "LightBlue";
  const clr4 = "LightCyan";
  // const colors = ["Beige", "LightYellow", "LightBlue", "LightCyan"];

  return (
    <CommonContext.Consumer>
      {/* Using loop
      {({ updateColor }) => (
        <div>
          {colors.map((color, index) => (
            <React.Fragment key={index}>
              <button onClick={() => updateColor(color)}>{color}</button>
              &emsp;
            </React.Fragment>
          ))}
        </div>
      )}
     */}

      {({ updateColor }) => (
        <div>
          <button onClick={() => updateColor(clr1)}>{clr1}</button>
          &emsp;
          <button onClick={() => updateColor(clr2)}>{clr2}</button>
          &emsp;
          <button onClick={() => updateColor(clr3)}>{clr3}</button>
          <br /> <br />
          <button onClick={() => updateColor(clr4)}>Default</button>
        </div>
      )}
    </CommonContext.Consumer>
  );
}

export default Button;
