import { useParams } from "react-router-dom";
import Header from "./Header";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function UpdateProduct(props) {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  let localImageBasePath = ""; // "http://localhost:8080/products/"
  let img_mobile =
    "https://cdn.pixabay.com/photo/2017/08/07/22/21/technology-2608530_1280.jpg";

  useEffect(() => {
    update();
  }, []);

  async function update() {
    console.warn("ID:", id);
    let resp = await fetch("http://localhost:8080/products/" + id);
    let result = await resp.json(); // console.log("result:", result);
    setData(result.data);
    setName(result.name);
    setFile(result.file);
    setPrice(result.price);
    setDescription(result.description);
  }

  async function editProduct(id) {
    const formData = new FormData(); //     console.log(name, file, price, description);
    formData.append("name", name);
    formData.append("file", file);
    formData.append("price", Number.parseInt(price));
    formData.append("description", description);
    let resp = await fetch(
      `http://localhost:8080/products/update/${id}?_method=PUT`,
      {
        method: "POST", // Use POST method for overriding
        body: formData,
      }
    );
    let result = await resp.json(); // console.log(result);
    console.log(JSON.stringify(result));
    alert("Product updated.");
  }

  return (
    <div>
      <Header />
      <h2>Update Product</h2> <br /> <br />
      <input
        type="text"
        defaultValue={data.name}
        onChange={(e) => setName(e.target.value)}
      />
      <br /> <br />
      {/* <img src={localImageBasePath + item.file} alt="mobile"></img> */}
      <img
        style={{ width: 75 }}
        src={localImageBasePath + img_mobile}
        alt="mobile"
      />
      <br /> <br />
      <input
        type="file"
        defaultValue={data.file}
        onChange={(e) => setFile(e.target.files[0])}
      />
      <br /> <br />
      <input
        type="text"
        defaultValue={data.price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <br /> <br />
      <input
        type="text"
        defaultValue={data.description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br /> <br />
      <Button
        onClick={() => {
          editProduct(data.id);
        }}
      >
        Update
      </Button>
    </div>
  );
}

export default UpdateProduct;
