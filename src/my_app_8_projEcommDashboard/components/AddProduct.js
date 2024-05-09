import { useState } from "react";
import { Button } from "react-bootstrap";
import Header from "./Header";

// Functionality: VIDEO 93
function AddProduct() {
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  async function addProduct() {
    const formData = new FormData(); //     console.log(name, file, price, description);
    formData.append("name", name);
    formData.append("file", file);
    formData.append("price", Number.parseInt(price));
    formData.append("description", description);
    let resp = await fetch("http://localhost:8080/products/add", {
      method: "POST",
      body: formData,
    });
    let result = await resp.json(); // console.log(result);
    console.log(JSON.stringify(result));
    alert("Product saved.");
  }

  return (
    <div>
      <Header />
      <div className="col-sm-6 offset-sm-3">
        <h2>Add Product</h2>
        <input
          type="text"
          className="form-control"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="file"
          className="form-control"
          placeholder="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <Button className="btn btn-primary" onClick={addProduct}>
          Add Product
        </Button>
      </div>
    </div>
  );
}

export default AddProduct;
