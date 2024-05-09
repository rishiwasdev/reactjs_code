import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected(props) {
  let Cmp = props.Cmp;
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("user-info")) {
      // NOT LOGGED-IN?
      navigate("/login"); // if LOGGED-OUT user enters bookmarked/add/update uri, redirect to register
    }
  }, [navigate]); // empty array => runs 1 time

  return (
    <>
      <div>
        <Cmp />
      </div>
    </>
  );
}

export default Protected;
