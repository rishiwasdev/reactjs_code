import React, { Fragment } from "react";
import { useParams, useLocation } from "react-router-dom";

/**
 * Hook: useLocation: to get what we have when we go to a Route.
 * Gives: { pathname: '/path', search: '', hash: '', state: null, key: 'some_value' }
 * On Page, Click: User > username (Navi/Rishi)
 * - path: contains the pathname: /user-info/username
 */
function UserInfo(prop) {
  const color = "antiquewhite";
  const params = useParams();
  const { name } = params; // destructuring name property of params to variable having same name
  const NAAM = params.name ? params.name : "Guest";
  const location = useLocation();
  console.log(location);

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
