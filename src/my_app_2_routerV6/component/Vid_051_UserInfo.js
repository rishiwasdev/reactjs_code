import React, { Fragment } from "react";
import { useParams } from "react-router-dom";

function UserInfo(prop) {
  const color = "antiquewhite";
  const params = useParams();
  const { name } = params; // destructuring name property of params to variable having same name
  const NAAM = params.name ? params.name : "Guest";

  return (
    <Fragment>
      <div>
        <h2 style={{ backgroundColor: color }}>
          {name ? name : "Guest"}'s Page
        </h2>
      </div>
      <hr />
      <h2 style={{ backgroundColor: color }}>{NAAM.toUpperCase()}'s Page</h2>
      Check the code (Vid_051_User.js) to see the difference.
    </Fragment>
  );
}

export default UserInfo;
