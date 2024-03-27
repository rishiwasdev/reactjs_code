function Member(props) {
  return (
    <div>
      <h3>Member Component</h3>
      <button onClick={props.data}>Get Data from App</button>
      {/* below works the same, taught in previous tutorials */}
      {/* <button onClick={() => props.data()}>Get Data from App</button> */}
    </div>
  );
}

export default Member;
