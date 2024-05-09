import { useEffect, useState } from "react";
import Header from "./Header";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductList() {
  const [data, setData] = useState([]);
  let localImageBasePath = ""; // "http://localhost:8080/products/"
  let img_mobile =
    "https://cdn.pixabay.com/photo/2017/08/07/22/21/technology-2608530_1280.jpg";

  useEffect(() => {
    fetchData();
  }, []);

  // console.log("data:", data);

  async function fetchData() {
    let resp = await fetch("http://localhost:8080/products");
    let result = await resp.json(); // console.log(result);
    setData(result.data);
  }

  async function del(id) {
    // console.log("ID:", id);
    let resp = await fetch("http://localhost:8080/products/delete/" + id, {
      method: "DELETE",
    });
    let result = await resp.json();
    console.log("result:", result);
    fetchData();
  }

  return (
    <div>
      <Header />
      <h2>Product-List</h2>
      <div className="col-sm-8 offset-sm-2">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Description</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, key) => (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{item.id}</td>
                <td>{item.name}</td>
                {/* TODO - BELOW
                 * Resolve image storing(DONE?) & fetching issue at backend.
                 * Using static image for now.
                 */}
                <td>
                  {/* <img src={localImageBasePath + item.file} alt="mobile"></img> */}
                  <img
                    style={{ width: 75 }}
                    src={localImageBasePath + img_mobile}
                    alt="mobile"
                  ></img>
                </td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>
                  <Link to={"update/" + item.id}>
                    <span className="update">Update</span>
                  </Link>
                  &emsp;
                  <span
                    className="delete"
                    onClick={() => {
                      del(item.id);
                    }}
                  >
                    Delete
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default ProductList;
