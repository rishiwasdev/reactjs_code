import { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

function SearchProduct() {
  const [data, setData] = useState([]);
  let localImageBasePath = ""; // "http://localhost:8080/products/"
  let img_mobile =
    "https://cdn.pixabay.com/photo/2017/08/07/22/21/technology-2608530_1280.jpg";

  async function search(name) {
    if (name.length > 0) {
      let resp = await fetch("http://localhost:8080/products/search/" + name);
      let result = await resp.json();
      console.log(JSON.stringify(result));
      setData(result.data);
    } else {
      setData([]);
    }
  }
  return (
    <div>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <h2>Search Product</h2>
        <input
          type="text"
          className="form-control"
          placeholder="Search Product"
          onChange={(e) => search(e.target.value)}
        />
        {data.length > 0 ? (
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
                    <span className="delete" onClick={() => {}}>
                      Delete
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <h3>Type to search</h3>
        )}
      </div>
    </div>
  );
}
export default SearchProduct;
