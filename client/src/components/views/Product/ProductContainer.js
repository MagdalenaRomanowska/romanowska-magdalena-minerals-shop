import {connect} from 'react-redux';
import Product from './Product';
import { getProduct } from '../../../redux/productsRedux';
import { addOrder } from '../../../redux/ordersRedux';

const mapStateToProps = (state, props) => ({
  product: getProduct(state, props.match.params.id), 
});

const mapDispatchToProps = dispatch => ({
  addOrder: order => dispatch(addOrder(order)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Product);