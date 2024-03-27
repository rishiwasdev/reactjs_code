import UserCompDefault, { UserComp } from "./component/Vid_008_FunctionComp";
function MyApp() {
  return (
    <div>
      {/* external file default component */}
      <UserCompDefault />
      {/* also acceptable */}
      {UserCompDefault()}

      {/* external file component */}
      <UserComp />
      {/* also acceptable */}
      {UserComp()}

      {/* same file component */}
      <CompSameFile />
      {/* also acceptable */}
      {CompSameFile()}
    </div>
  );
}

function CompSameFile() {
  return <h5>Same file Component.</h5>;
}

export default MyApp;
// export OR default can also be used with the definition
// e.g. export default function MyApp() { return() { ... } }
