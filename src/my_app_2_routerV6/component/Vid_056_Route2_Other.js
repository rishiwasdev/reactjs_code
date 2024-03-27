import React, { Fragment } from "react";

function Other() {
  const color = "lightpink";

  return (
    <Fragment>
      <div style={{ backgroundColor: color, padding: 5 }}>
        <h2>Other Page (Route 2)</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br />
          Excepturi et sequi consequuntur, laboriosam illo blanditiis quidem
          praesentium esse sed!
          <br />
          Laborum quo omnis aut quam nihil fugiat incidunt non qui vero!
        </p>
      </div>
    </Fragment>
  );
}

export default Other;
