import {connect} from 'react-redux';
import Basket from './Basket';
import { getOrders, increaseAmount, decreaseAmount } from '../../../redux/ordersRedux';

const mapStateToProps = (state) => ({
  orders: getOrders(state), 
});

const mapDispatchToProps = dispatch => ({
  increaseAmount: order => dispatch(increaseAmount(order)),
  decreaseAmount: order => dispatch(decreaseAmount(order)),
});



export default connect(mapStateToProps, mapDispatchToProps)(Basket);