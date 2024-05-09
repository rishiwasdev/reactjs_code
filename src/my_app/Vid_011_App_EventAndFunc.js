// gets called on first time page rendering
// alert("page started");
function MyApp() {
  let name = "Rishi";
  function test() {
    alert("test called");
  }
  function changeName() {
    alert("changeName called");
    name = "Navi";
  }
  return (
    <div>
      <h2>Hello World!</h2>
      {/* BELOW: calling function with brackets {apple()} will cause infinite calls, because
      it gets called on first time page rendering, and keeps getting rendered over and again.
      It WON'T get called on clicking the button.*/}
      <button onClick={test}>Click-1</button>
      <br />
      <br />
      {/* Defining function inline i.e. Arrow Function, called on event. 
      States & Props in next tutorials.*/}
      <button onClick={() => test()}>Click-2</button>
      <br />
      <br />
      <button onClick={() => alert("ALERT CALLED.")}>ALERT</button>
      <br />
      <br />
      <b>
        Name: <span style={{ color: "blue" }}>{name}</span>
      </b>
      {/* Need state for changing variable to work . */}
      <div>
        &emsp; <button onClick={changeName}>Click to Change Name</button>
        {/* NOTE: state/var  is USED WITHOUT {...} inside an object, Check file Vid_014_App_PropsInFuncComp.js */}
      </div>
      <div>
        &emsp; <span>does not change name, need state or prop to change.</span>
      </div>
    </div>
  );
}

export default MyApp;
