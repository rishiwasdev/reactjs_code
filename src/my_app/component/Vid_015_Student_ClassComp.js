import React from "react";

class Student extends React.Component {
  render() {
    console.log("props: " + this.props); //("name: " + props.name);

    return (
      <div style={{ backgroundColor: "skyblue", margin: 10 }}>
        <div style={{ fontWeight: "bold", color: "navy" }}>
          Student <b>CLASS-Component</b>
        </div>
        Hello{" "}
        <span>
          {this.props.name} ({this.props.email}, {this.props.contact.addr},{" "}
          {this.props.contact.mob})
        </span>
      </div>
    );
  }
}

export default Student;
