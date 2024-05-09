// import { Button } from "react-bootstrap";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "../App.css";
import AddProduct from "./components/AddProduct";
import Login from "./components/Login";
import Protected from "./components/Protected";
import Register from "./components/Register";
import UpdateProduct from "./components/UpdateProduct";
import ProductList from "./components/ProductList";
import SearchProduct from "./components/SearchProduct";

function MyApp() {
  return (
    <div className="App">
      <Router>
        {/* <Header /> Vid 90, move this Header to all pages: Login, Register, Add, Update product */}
        <h1>E-Comm Project</h1>
        {/* Video 86, so commented: <button>Normal Button</button>&emsp;<Button>Boostrap Button</Button> */}
        {/* Further learning (Vid 87 onwards) continues. */}
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* Protected to make sure page not opened by bookmark, unless logged in */}
          <Route path="/" element={<Protected Cmp={ProductList} />} />
          <Route path="/add" element={<Protected Cmp={AddProduct} />} />
          <Route
            path="/update/:id"
            element={<Protected Cmp={UpdateProduct} />}
          />
          <Route path="/search" element={<Protected Cmp={SearchProduct} />} />
          <Route path="/*" element={<Protected Cmp={ProductList} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default MyApp;
