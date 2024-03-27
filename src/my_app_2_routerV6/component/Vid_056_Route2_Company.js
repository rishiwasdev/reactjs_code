import React, { Fragment } from "react";

function Channel() {
  const color = "lightskyblue";

  return (
    <Fragment>
      <div style={{ backgroundColor: color, padding: 5 }}>
        <h2>Company Page (Route 2)</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br />
          Sunt repellendus, porro distinctio aliquam eligendi praesentium culpa
          temporibus veritatis nostrum velit provident.
          <br />
          Explicabo ut necessitatibus asperiores deserunt rerum? Quas, eum
          voluptatibus?
        </p>
      </div>
    </Fragment>
  );
}

export default Channel;
