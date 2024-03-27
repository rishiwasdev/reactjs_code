function MyApp() {
  const students = ["Abc", "Def", "Ghi", "Jkl"];

  //map looping IS SUPPORTED IN return(...) below
  // eslint-disable-next-line
  students.map((s) => {
    console.log("Name(map):", s);
    return null;
  });

  //for loop NOT SUPPORTED IN return(...) below
  for (let i = 0; i < students.length; i++) {
    console.log("Name(loop):", students[i]);
  }

  return (
    <div>
      <h2>Handle Array with List (Traversal)</h2>
      {students.map((s) => {
        return <h6>Name: {s}</h6>;
      })}
      <br />
      <br />
      {/* for BELOW NOT SUPPORTED */}
      {/* { 
        for (let i = 0; i < students.length; i++) {
          console.log("Name(loop):", students[i]);
        }
      } */}
    </div>
  );
}

export default MyApp;
