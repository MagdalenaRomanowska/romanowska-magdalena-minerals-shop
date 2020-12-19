import {connect} from 'react-redux';
import Product from './Product';
import { getProduct } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  product: getProduct(state),
});


export default connect(mapStateToProps)(Product);