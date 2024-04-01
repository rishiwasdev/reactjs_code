import React from "react";

function Home(props) {
  let data = props.data;
  let count = data.length;
  console.log("Home->props:", props);

  let img_mob_samsung =
    "https://cdn.pixabay.com/photo/2017/08/07/22/21/technology-2608530_1280.jpg";
  // let img_pingu = "https://www.gstatic.com/webp/gallery3/3.png";

  return (
    <div>
      <h2>Home Component!</h2>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src={img_mob_samsung} alt="mobile"></img>
        </div>
        <div className="text-wrapper item">
          <span>Samsung S22</span> <br />
          <span>Price: $1000</span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() =>
              props.addToCartHandler({ name: "Samsung", price: 1000 })
            }
          >
            Add Item
          </button>
          {count > 0 ? (
            <button
              className="remove-cart-btn"
              onClick={() => props.removeFromCartHandler()}
            >
              Remove
            </button>
          ) : (
            <button
              className="remove-cart-btn"
              style={{ backgroundColor: "lightgrey", color: "black" }}
              onClick={() => props.removeFromCartHandler()}
              disabled
            >
              Remove
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
