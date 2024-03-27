// import { Table } from "react-bootstrap";
import User from "./component/Vid_037_User";

function MyApp() {
  const users = [
    { name: "Abc", email: "ab@c.com", city: "Delhi" },
    { name: "Def", email: "de@f.com", city: "Gurugram" },
    { name: "Ghi", email: "gh@i.com", city: "Jaipur" },
    { name: "Jkl", email: "jk@l.com", city: "Gurugram" },
    { name: "Mno", email: "mn@0.com", city: "Noida" },
    { name: "Pqr", email: "pq@r.com", city: "Delhi" },
  ];

  return (
    <div>
      <h2>Resue Component with List</h2>
      <h3>User Components</h3>
      {/* WAY-1 - using => (...) */}
      {users.map((item, id) => (
        <>
          <User data={item} />
          <button
            style={{ margin: 20, backgroundColor: "red" }}
            onClick={() => {
              /**  DON'T CREATE this function in the component called,
               * else 'that many' functions will be created
               * which may cause slowness in rendering.
               */
              alert(item.name);
            }}
          >
            Alert
          </button>
        </>
      ))}

      {/* WAY-2 - using => { return ...; } */}
      {/* {
        users.map( (item, id) => {
            return <User />;
          }
        )
      } */}
    </div>
  );
}

export default MyApp;
