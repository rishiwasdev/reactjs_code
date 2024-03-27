function Student(props) {
  console.info("props: " + props); //("name: " + props.name);

  return (
    <div style={{ backgroundColor: "skyblue", margin: 10 }}>
      <div style={{ fontWeight: "bold", color: "navy" }}>
        Student <b>FUNCTION-Component</b>
      </div>
      Hello{" "}
      <span>
        {props.name} ({props.email}, {props.contact.addr}, {props.contact.mob})
      </span>
    </div>
  );
}

export default Student;
