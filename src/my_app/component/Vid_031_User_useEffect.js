import { useEffect } from "react";

function User(props) {
  useEffect(() => {
    console.log("useEffect() - called for: props.count");
  }, [props.count]); // called only when props.count changes

  useEffect(() => {
    console.log("useEffect() - called for: props.data");
  }, [props.data]); // called only when props.data changes

  useEffect(() => {
    console.log("useEffect() - called for both: props data & count");
  }, [props.count, props.data]); // called for both: props.count &  props.data

  return (
    <div>
      <h3>User Component</h3>
      <h4>Count: {props.count}</h4>
      <h4>Data: {props.data}</h4>
    </div>
  );
}

export default User;
