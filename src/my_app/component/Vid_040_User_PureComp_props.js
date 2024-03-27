import { PureComponent } from "react";

class User extends PureComponent {
  render() {
    console.log("User -> method render()");
    return (
      <div>
        <br />
        <p>
          User Component
          <span style={{ fontSize: 24, fontWeight: "bold", margin: 30 }}>
            Count: {this.props.count}
          </span>
        </p>
      </div>
    );
  }
}

export default User;
