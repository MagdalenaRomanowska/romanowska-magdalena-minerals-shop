import {connect} from 'react-redux';
import ProductsList from './ProductsList';
import { getMinerals, loadMineralsRequest } from '../../../redux/mineralsRedux';
import { getProducts, loadProductsRequest } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  minerals: getMinerals(state),
  products: getProducts(state),
});

const mapDispatchToProps = dispatch => ({
  loadMinerals: () => dispatch(loadMineralsRequest()), 
  loadProducts: () => dispatch(loadProductsRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);