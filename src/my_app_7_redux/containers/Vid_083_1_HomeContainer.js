// Video 82
import { connect } from "react-redux";
import Home from "../components/Vid_083_1_Home";
import { addToCart } from "../services/actions/Vid_083_1_action";

const mapStateToProps = (state) => ({
  data: state.cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
