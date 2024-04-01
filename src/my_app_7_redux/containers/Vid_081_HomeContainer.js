import { connect } from "react-redux";
import Home from "../components/Vid_078_Home";
import { addToCart } from "../services/actions/Vid_079_action";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
