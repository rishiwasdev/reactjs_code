import React from "react";

function User(props) {
  const { data } = props;
  return (
    <div>
      <h3>User Component!</h3>
      <h4>Name: {data.name}</h4>
      <h4>Age: {data.age}</h4>
    </div>
  );
}

export default User;
