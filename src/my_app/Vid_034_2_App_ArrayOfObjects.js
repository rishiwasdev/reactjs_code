function MyApp() {
  const students = [
    { name: "Abc", email: "ab@c.com", contact: 111 },
    { name: "Def", email: "de@f.com", contact: 222 },
    { name: "Ghi", email: "gh@i.com", contact: 333 },
    { name: "Jkl", email: "jk@l.com", contact: 444 },
  ];

  return (
    <div>
      <h2>Array Objects</h2>
      <table border="1px" align="center">
        {/* style={{ border: "1px solid #999", }} */}
        <tbody>
          {/* tbody removes table's HTML error */}
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
          </tr>
          {/* k below is passed as key (removes error), 
              React virtual DOM needs key to identify list elements so as to update specific items for fast response. */}
          {students.map((s, k) => {
            return (
              <tr key={k}>
                <td>{s.name}</td>
                <td>{s.email}</td>
                <td>{s.contact}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default MyApp;
