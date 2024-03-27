import { Table } from "react-bootstrap";

function MyApp() {
  const students = [
    { name: "Abc", email: "ab@c.com", contact: 111 },
    { name: "Def", email: "de@f.com", contact: 222 },
    { name: "Ghi", email: "gh@i.com", contact: 333 },
    { name: "Jkl", email: "jk@l.com", contact: 444 },
    { name: "Mno", email: "mn@o.com", contact: 555 },
    { name: "Pqr", email: "pq@r.com", contact: 666 },
  ];

  return (
    <div>
      <h2>Array (Handle 'unique key' warning)</h2> {/* BOOTSTRAP <Table> */}
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {students.map((user, k) =>
            user.contact % 2 === 0 ? ( // SHOW ONLY EVEN NUMBER USERS
              <tr key={k}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.contact}</td>
              </tr>
            ) : null
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default MyApp;
