import { useState } from "react";

function MyApp() {
  const [val, setVal] = useState(1);
  const [prevVal, setPrevVal] = useState(null);

  function randomVal() {
    let random = Math.floor(Math.random() * 10); // Number.parseInt(Math.random() * 10);
    setVal((pr) => {
      console.log("Previous value:", pr);
      setPrevVal(pr);
      if (pr < 2) alert("Previous value: Low");
      if (pr > 7) alert("Previous value: High");
      return random;
    });
  }

  function plus5() {
    for (let i = 0; i < 5; i++) {
      setVal((pr) => {
        // one liner return can be done inside () w/o return keyword e.g. setVal((pr) => (pr + 1));
        setPrevVal(pr);
        return pr + 1;
      });
    }
    alert(
      "Val is increased by 1 in loop 5 times\n(=> returned +5 at once),\nhence prev value too."
    );
  }

  return (
    <div className="App">
      <h1>Maintaining Previous State</h1>
      <div style={{ margin: 30 }}>
        <h4>Previous value: {prevVal}</h4>
        <h4>Random value: {val}</h4>
        <button onClick={randomVal}>Change</button> &emsp;
        <button onClick={plus5}>Plus5</button>
      </div>
    </div>
  );
}

export default MyApp;
