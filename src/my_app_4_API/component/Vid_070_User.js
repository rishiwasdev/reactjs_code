import { useEffect, useRef } from "react";

function User(props) {
  const lastVal = useRef();
  // useEffect will run before current value updates, and sets prev value in lastVal.
  // val gets new value afterwards.
  useEffect(() => {
    lastVal.current = props.val;
  });
  const prevPros = lastVal.current;

  return (
    <div style={{ backgroundColor: "beige", margin: 10 }}>
      <h2>User Component</h2>
      <h4>Previous value: {prevPros}</h4>
      <h4>Random value: {props.val}</h4>
    </div>
  );
}

export default User;
