import React from "react";

class Student extends React.Component {
  componentWillUnmount() {
    console.log("inside method: componentWillUnmount()");
  }

  render() {
    return (
      <div style={{ margin: 10 }}>
        <div style={{ fontWeight: "bold", color: "navy" }}>
          Student <b>CLASS-Component</b>
        </div>
      </div>
    );
  }
}

export default Student;
