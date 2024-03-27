// import Profile from "./component/Vid_019_Profile_IfElseTernary";
// import Login from "./component/Vid_020_Login_BasicFormValidation";
import User from "./component/Vid_021_1_User_FuncAsProps";
import Member from "./component/Vid_021_2_Member_FuncAsProps";

function MyApp() {
  return (
    <div className="App">
      {/* -----------------------------Vid_019------------------------------ */}
      {/* <h2>Condition: If Else</h2>
      <Profile /> */}
      {/* -----------------------------Vid_020------------------------------ */}
      {/* <h2>Basic Form Validation</h2>
      <Login /> */}
      {/* -----------------------------Vid_021------------------------------ */}
      {/** Vid_021: Functions as Props. Declare in Parent/Calling Component once, then
       * Use as many times as required.
       * Use in more than 1 components i.e. User, Member,... as below.
       */}
      <h2>Functions as Props</h2>
      <User data={getData_Vid021} />
      <Member data={getData_Vid021} />
      <User data={getData_Vid021} />
    </div>
  );

  function getData_Vid021() {
    alert("Hello from App");
  }
}

export default MyApp;
