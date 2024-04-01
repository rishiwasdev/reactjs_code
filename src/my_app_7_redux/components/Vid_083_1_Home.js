import React from "react";

function Home(props) {
  let data = props.data;
  let count = data.length;
  console.log("Home->props:", data);

  let img_mob_samsung =
    "https://cdn.pixabay.com/photo/2017/08/07/22/21/technology-2608530_1280.jpg";
  // let img_pingu = "https://www.gstatic.com/webp/gallery3/3.png";
  let img_cart_empty =
    "https://cdn4.vectorstock.com/i/1000x1000/31/18/shopping-cart-icon-with-plus-sign-vector-20053118.jpg";
  let img_cart_full =
    "https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/shopping_cart_full.png";

  return (
    <div>
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
      <h2>Home Component!</h2>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src={img_mob_samsung} alt="mobile"></img>
        </div>
        <div className="text-wrapper item">
          <span>Samsung</span>
          <span>Price: $1000</span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() =>
              props.addToCartHandler({ name: "Samsung", price: 1000 })
            }
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
