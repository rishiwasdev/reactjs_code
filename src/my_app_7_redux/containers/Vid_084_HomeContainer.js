// Video 82
import { connect } from "react-redux";
import Home from "../components/Vid_084_Home";
import { addToCart, removeFromCart } from "../services/actions/Vid_084_action";

const mapStateToProps = (state) => ({
  data: state.cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
  removeFromCartHandler: (data) => dispatch(removeFromCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
