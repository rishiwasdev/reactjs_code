import { useState } from "react";

function Login() {
  const [usr, setUsr] = useState("");
  const [pwd, setPwd] = useState("");
  const [usrErr, setUsrErr] = useState(false);
  const [pwdErr, setPwdErr] = useState(false);

  function loginHandle(e) {
    alert(
      usr.length <= 3 || pwd.length <= 3
        ? "Invalid User ID or Password"
        : "Success"
    );
    e.preventDefault();
  }

  function usrHandler(e) {
    let input = e.target.value;
    setUsrErr(input.length <= 3);
    setUsr(input);
  }

  function pwdHandler(e) {
    let input = e.target.value;
    setPwdErr(input.length <= 3);
    setPwd(input);
  }

  return (
    <div>
      <h3>Login Component</h3>
      <form onSubmit={loginHandle}>
        <input type="text" placeholder="User ID" onChange={usrHandler} />
        {usrErr ? <span>Invalid User ID.</span> : null}
        <br />
        <br />
        <input type="password" placeholder="Password" onChange={pwdHandler} />
        {pwdErr ? <span>Invalid Password.</span> : null}
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
