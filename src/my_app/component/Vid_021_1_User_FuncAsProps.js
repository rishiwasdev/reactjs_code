function User(props) {
  return (
    <div>
      <h3>User Component</h3>
      <button onClick={props.data}>Get Data from App</button>
      {/* below works the same, taught in previous tutorials */}
      {/* <button onClick={() => props.data()}>Get Data from App</button> */}
    </div>
  );
}

export default User;
