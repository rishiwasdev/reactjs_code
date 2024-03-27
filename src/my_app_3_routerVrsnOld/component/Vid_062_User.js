import { useNavigate, useParams } from "react-router-dom";

function User(props) {
  console.log(useParams());
  const { id } = useParams(); // Access the id parameter from the route
  const { name } = useParams(); // Access the id parameter from the route
  const navigate = useNavigate();

  const navToHome = () => {
    navigate("/");
  };

  return (
    <div style={{ backgroundColor: "beige", margin: 10 }}>
      <h2>User Page</h2>
      <h4>User ID: {id}</h4> {/* Display the user ID */}
      <h4>User Name: {name}</h4> {/* Display the user ID */}
      <button onClick={navToHome}>Go to Home</button>
    </div>
  );
}

export default User;
