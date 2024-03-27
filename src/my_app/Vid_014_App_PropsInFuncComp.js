import { useState } from "react";
import Student from "./component/Vid_014_Student_FuncComp";

function MyApp() {
  const [mobNum, setMob] = useState(6666666666);
  const [adrs, setAdrs] = useState("Delhi");
  const [mail, setMail] = useState("tik@gmail");

  return (
    <div>
      <h1>Props in React</h1>
        {/* BELOW is HOW to PASS a Props/Params to Component, 'contact' is object inside props.
         * Props can only be changed in Parent/Calling component.
         * TO STUDY: we can pass HTML in props using:
              - this.children in function components
              - this.props.children in class components
         * e.g. THIS TAG in this example, Not in Student js file.*/}
         <Student
        name={"Navi"}
        email={"nav@gmail"}
        contact={{
          mob: 9999999999,
          addr: "Ludhiana",
        }}
      />
      <br />
      {/* Reusing same component, different data*/}
      <Student
        name={"Rishi"}
        email={"rrr@gmail"}
        contact={{
          mob: 8888888888,
          addr: "Nangal",
        }}
      />
      <br />
      <Student
        name="Tikku"
        email={mail}
        contact={{
          mob: mobNum,
          addr: adrs,
        }}
        // NOTE: state/var INSIDE this OBJECT is USED WITHOUT {...}
      />
      <br />
      <button
        onClick={() => {
          setMob(mobNum === 6666666666 ? 7777777777 : 6666666666);
          setAdrs(adrs === "Delhi" ? "Ludhiana" : "Delhi");
          setMail(mail === "tiktik@gmail" ? "tik@gmail" : "tiktik@gmail");
        }}
        style={{ backgroundColor: "yellow" }}
      >
        Change
      </button>
    </div>
  );
}
export default MyApp;
