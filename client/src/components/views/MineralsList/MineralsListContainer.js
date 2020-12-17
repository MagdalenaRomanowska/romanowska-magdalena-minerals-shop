import {connect} from 'react-redux';
import MineralsList from './MineralsList';
import {getPosts} from '../../../redux/postsRedux';

const mapStateToProps = state => ({
  posts: getPosts(state),
});

export default connect(mapStateToProps)(MineralsList);