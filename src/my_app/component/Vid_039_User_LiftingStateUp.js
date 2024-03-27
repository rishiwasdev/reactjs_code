import { Fragment } from "react";

function User(props) {
  const data = { name: "Abc Def", email: "abc@def.com" };

  return (
    <Fragment>
      <h3>User Component</h3>
      <button
        onClick={() => {
          props.alert(data);
        }}
      >
        Click
      </button>
    </Fragment>
  );
}

export default User;
