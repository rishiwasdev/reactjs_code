import { forwardRef } from "react";

function User(props, ref) {
  return (
    <div>
      <h3>User Component</h3>
      <input type="text" ref={ref} />
    </div>
  );
}

export default forwardRef(User);
// Same way, in Class Components, just wrap in forwardRef(...)
