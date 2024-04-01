import React from "react";

// Vid 82: added props and code
function Home(props) {
  console.log("Home->props:", props);

  let img_mob_samsung =
    "https://cdn.pixabay.com/photo/2017/08/07/22/21/technology-2608530_1280.jpg";
  // let img_pingu = "https://www.gstatic.com/webp/gallery3/3.png";
  let img_cart =
    "https://img.freepik.com/premium-vector/shopping-carts-shopping-malls-placing-products-payment_68708-2172.jpg?w=1060";
  img_cart =
    "https://cdn4.vectorstock.com/i/1000x1000/31/18/shopping-cart-icon-with-plus-sign-vector-20053118.jpg";

  return (
    <div>
      <h2>Home Component!</h2>
      <div className="add-to-cart">
        <img src={img_cart} alt="cart"></img>
      </div>
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
