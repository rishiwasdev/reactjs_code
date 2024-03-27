import React from "react";
import "../my_css/Vid_032_style1.css";
function User(prop) {
  return (
    <div>
      {/* check CSS for 'span' in my_css/Vid_032_style1.css */}
      <span>{prop.data.name}</span>
      <span>{prop.data.city}</span>
      <span>{prop.data.email}</span>

      {/** DON'T CREATE below/any function (click button) in this component,
       * else 'that many' functions will be created with each call
       * which may cause slowness in rendering. */}
      {/* <button
        style={{ margin: 20, backgroundColor: "red" }}
        onClick={() => {
          alert(prop.data.name);
        }}
      >
        Alert
      </button> */}
    </div>
  );
}

export default User;
