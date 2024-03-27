import { Table } from "react-bootstrap";

function MyApp() {
  const users = [
    {
      name: "Abc",
      email: "ab@c.com",
      address: [
        { city: "Delhi", state: "Delhi", h_num: 11 },
        { city: "Kalka", state: "HP", h_num: 223 },
      ],
    },
    {
      name: "Def",
      email: "de@f.com",
      address: [{ city: "Gurugram", state: "Haryana", h_num: 44 }],
    },
    {
      name: "Ghi",
      email: "gh@i.com",
      address: [
        { city: "Jaipur", state: "Rajasthan", h_num: 543 },
        { city: "Delhi", state: "Delhi", h_num: 989 },
        { city: "Noida", state: "UP", h_num: 77 },
      ],
    },
    {
      name: "Jkl",
      email: "jk@l.com",
      address: [
        { city: "Bhuj", state: "Gujarat", h_num: 112 },
        { city: "Pune", state: "Maharashtra", h_num: 565 },
        { city: "Simla", state: "HP", h_num: 33 },
      ],
    },
    {
      name: "Mno",
      email: "mn@o.com",
      address: [
        { city: "Noida", state: "UP", h_num: 99 },
        { city: "Delhi", state: "Delhi", h_num: 134 },
      ],
    },
    {
      name: "Pqr",
      email: "pq@r.com",
      address: [
        { city: "Noida", state: "UP", h_num: 666 },
        { city: "Karnal", state: "Noida", h_num: 22 },
      ],
    },
  ];

  return (
    <div>
      <h2>Array (Handle 'unique key' warning)</h2> {/* BOOTSTRAP <Table> */}
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>S.N.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, k1) => (
            <tr key={k1}>
              <td>{k1 + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Table variant="dark" striped>
                  <tbody>
                    <tr>
                      <th>H.N.</th>
                      <th>City</th>
                      <th>State</th>
                    </tr>
                    '{/* WAY-1 - using => (...) */}'
                    {user.address.map((addr, k2) => (
                      <tr key={k2}>
                        <td>{addr.h_num}</td>
                        <td>{addr.city}</td>
                        <td>{addr.state}</td>
                      </tr>
                    ))}
                    {/* WAY-2 - using => { return ...; } */}
                    {/* <TRY CODE> */}
                  </tbody>
                </Table>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default MyApp;
