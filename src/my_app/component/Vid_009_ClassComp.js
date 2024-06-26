import React, { Component } from "react";

// for class components: render() { return(...) }.
// i.e. return (...) inside render()
class User extends Component {
  render() {
    return (
      <div>
        <h2>Hello from User!</h2>
      </div>
    );
  }
}

export default User;
// export OR default can also be used with the definition
// e.g. export default class User extends Component { return() { ... } }
