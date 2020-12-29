import {connect} from 'react-redux';
import Basket from './Basket';
import { getOrders, increaseAmount, decreaseAmount, addOrder, removeOrder, updateComment } from '../../../redux/ordersRedux';

const mapStateToProps = (state) => ({
  orders: getOrders(state), 
});

const mapDispatchToProps = dispatch => ({
  increaseAmount: productId => {
    dispatch(increaseAmount(productId));
  },
  decreaseAmount: productId => dispatch(decreaseAmount(productId)),
  removeOrder: productId => dispatch(removeOrder(productId)),
  updateComment: (productId, comment) => dispatch(updateComment(productId, comment)),
  addOrder: order => dispatch(addOrder(order)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Basket);