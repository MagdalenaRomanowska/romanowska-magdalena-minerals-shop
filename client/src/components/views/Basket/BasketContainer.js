import {connect} from 'react-redux';
import Basket from './Basket';
import { getOrders } from '../../../redux/ordersRedux';

const mapStateToProps = (state) => ({
  orders: getOrders(state), 
});


export default connect(mapStateToProps)(Basket);