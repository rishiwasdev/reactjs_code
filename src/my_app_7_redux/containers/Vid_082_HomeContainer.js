import { connect } from "react-redux";
import Home from "../components/Vid_082_Home";
import { addToCart } from "../services/actions/Vid_082_action";

const mapStateToProps = (state) => ({
  data: state, 
});

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
