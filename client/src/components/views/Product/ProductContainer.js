import {connect} from 'react-redux';
import Product from './Product';
import { getProduct } from '../../../redux/productsRedux';

const mapStateToProps = (state, props) => ({
  product: getProduct(state, props.match.params.id), 
});


export default connect(mapStateToProps)(Product);