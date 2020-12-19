import {connect} from 'react-redux';
import MineralPost from './MineralPost';
import {getMineral} from '../../../redux/mineralsRedux';

const mapStateToProps = (state, props) => ({
  mineral: getMineral(state, props.match.params.id),
});

export default connect(mapStateToProps)(MineralPost);

