import React from "react";

// used LC in filename as short for Lifecycle
class User extends React.Component {
  // Lifecycle method: constructor()
  constructor(props) {
    super(props);
    console.info("method called: constructor");
    this.state = { email: "R@gmail" };
    // can we get props in constructor? Video: yes, below: error
    // IT IS POSSIBLE by getting 'props' as constructor(props), then passing props to super(props).
    console.info("props inside constructor:", JSON.stringify(this.props));
  }

  // Lifecycle method: render()
  render() {
    console.info("method called: render in component User");
    console.info("state:", JSON.stringify(this.state)); // this.state
    console.info("props:", JSON.stringify(this.props)); // received props

    return (
      <div style={{ marginBottom: 10 }}>
        <br />
        <h3 style={{ marginRight: 20 }}>(User Component)</h3>
        {/* changing state re-render */}
        Email: <b style={{ color: "red" }}>{this.state.email}</b>{" "}
        (this.state.email)
        <button
          style={{ marginLeft: 20 }}
          onClick={() => {
            this.setState({
              email: this.state.email === "NAV@gmail" ? "R@gmail" : "NAV@gmail",
            });
          }}
        >
          Change state.email
        </button>
        <br />
        <br />
        <br />
        {/* changing props re-render */}
        Hello <b style={{ color: "red" }}>{this.props.name}!</b> (prop.name)
      </div>
    );
  }
}

export default User;
