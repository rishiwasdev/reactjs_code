import { Alert, Button } from "react-bootstrap";

function MyApp() {
  return (
    <div>
      <h2>Bootstrap</h2>
      <Button
        onClick={() => {
          alert("Hello!");
        }}
      >
        Click Me
      </Button>
      <br />
      <br />
      {/* ---------------------- */}
      <Alert variant="danger">alert-2 - DANGER</Alert>
      {/* ---------------------- */}
      {/*
      BELOW: remove alert that's not required, e.g. "warning"
       * OTHER VALUES: "danger", "warning", "info", "light", "dark"
       */}
      {["primary", "secondary", "success"].map((variant) => (
        <Alert key={variant} variant={variant}>
          {variant} alert-1 - check it out!
        </Alert>
      ))}
      <br />
      <br />
      {/* ---------------------- */}
      <div>
        <h4>Buttons</h4>
        <Button variant="primary">Primary</Button>{" "}
        <Button variant="secondary">Secondary</Button>{" "}
        <Button variant="success">Success</Button>{" "}
        <Button variant="warning">Warning</Button>{" "}
        <Button variant="danger">Danger</Button>{" "}
        <Button variant="info">Info</Button>{" "}
        <Button variant="light">Light</Button>{" "}
        <Button variant="dark">Dark</Button>{" "}
        <Button variant="link">Link</Button>
      </div>
      <br />
      {/* ---------------------- */}
      <div>
        <h4>Outline Buttons</h4>
        <Button variant="outline-primary">Primary</Button>{" "}
        <Button variant="outline-secondary">Secondary</Button>{" "}
        <Button variant="outline-success">Success</Button>{" "}
        <Button variant="outline-warning">Warning</Button>{" "}
        <Button variant="outline-danger">Danger</Button>{" "}
        <Button variant="outline-info">Info</Button>{" "}
        <Button variant="outline-light">Light</Button>{" "}
        <Button variant="outline-dark">Dark</Button>
      </div>
      <br />
      {/* ---------------------- */}
      <div>
        <h4>Button Tags</h4>
        <Button href="#">Link</Button> <Button type="submit">Button</Button>{" "}
        <Button as="input" type="button" value="Input" />{" "}
        <Button as="input" type="submit" value="Submit" />{" "}
        <Button as="input" type="reset" value="Reset" />
      </div>
      {/* ---------------------- */}
      <h4>Sizes</h4>
      <div className="mb-2">
        <Button variant="primary" size="lg">
          Large button
        </Button>{" "}
        <Button variant="secondary" size="lg">
          Large button
        </Button>
      </div>
      <div>
        <Button variant="primary" size="sm">
          Small button
        </Button>{" "}
        <Button variant="secondary" size="sm">
          Small button
        </Button>
      </div>
      {/* ---------------------- */}
      <h4>Block Buttons</h4>
      <div className="d-grid gap-2">
        <Button variant="primary" size="lg">
          Block level button
        </Button>
        <Button variant="secondary" size="lg">
          Block level button
        </Button>
      </div>
      {/* ---------------------- */}
      <div>
        <h4>Active State</h4>
        <Button variant="primary" size="lg" active>
          Primary button
        </Button>{" "}
        <Button variant="secondary" size="lg" active>
          Button
        </Button>
      </div>{" "}
      {/* ---------------------- */}
      <div>
        <h4>Disabled State</h4>
        <Button variant="primary" size="lg" disabled>
          Primary button
        </Button>{" "}
        <Button variant="secondary" size="lg" disabled>
          Button
        </Button>{" "}
        <Button href="#" variant="secondary" size="lg" disabled>
          Link
        </Button>
      </div>
    </div>
  );
}

export default MyApp;
