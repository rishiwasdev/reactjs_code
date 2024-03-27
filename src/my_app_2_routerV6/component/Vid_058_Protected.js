import { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected(props) {
  const { MyComponent } = props;
  const navigate = useNavigate();
  const color = "antiquewhite";

  useEffect(() => {
    let login = localStorage.getItem("login");
    if (!login) {
      navigate("/login");
    } 
  });

  return (
    <Fragment>
      <div style={{ backgroundColor: color }}>
        <MyComponent />
      </div>
    </Fragment>
  );
}

export default Protected;
