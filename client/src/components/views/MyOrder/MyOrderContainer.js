import {connect} from 'react-redux';
import MyOrder from './MyOrder';
import { getOrders, sendOrderRequest } from '../../../redux/ordersRedux';

const mapStateToProps = (state) => ({
  orders: getOrders(state), 
});

const mapDispatchToProps = dispatch => ({  
  sendOrder: orderSummary => dispatch(sendOrderRequest(orderSummary)),
});


export default connect(mapStateToProps, mapDispatchToProps)(MyOrder);