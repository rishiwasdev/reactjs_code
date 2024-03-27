import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

function Contact() {
  const color = "lightsteelblue";

  return (
    <Fragment>
      <div style={{ backgroundColor: color, padding: 5 }}>
        <h2>Contact Us Page (Route 1)</h2>
        <h3>Our Businesses:</h3>
        {/**MUST USE <outlet/> for nested Routes as in below example. 
        * NOTICE: NO SLASH (/) in the route attribute to.*/}
        <Link to="company">Company</Link>&emsp;
        <Link to="channel">Channel</Link>&emsp;
        <Link to="other">Other</Link>
        <Outlet />
      </div>
    </Fragment>
  );
}

export default Contact;
