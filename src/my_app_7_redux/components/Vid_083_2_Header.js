import React from "react";

function Header(props) {
  let data = props.data;
  let count = data.length;
  console.log("Header->props:", data);

  let img_cart_empty =
    "https://cdn4.vectorstock.com/i/1000x1000/31/18/shopping-cart-icon-with-plus-sign-vector-20053118.jpg";
  let img_cart_full =
    "https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/shopping_cart_full.png";

  return (
    <div>
      <h2>Header Component!</h2>
      {count < 1 ? (
        <div className="add-to-cart">
          <img src={img_cart_empty} alt="cart_empty"></img>
        </div>
      ) : (
        <div className="add-to-cart">
          <span className="cart-count">{count}</span>
          <img src={img_cart_full} alt="cart_empty"></img>
        </div>
      )}
    </div>
  );
}

export default Header;
