import {connect} from 'react-redux';
import BraceletPost from './BraceletPost';
import {getPosts, loadMineralsRequest } from '../../../redux/postsRedux';

const mapStateToProps = state => ({
  posts: getPosts(state),
});

const mapDispatchToProps = dispatch => ({
  loadMinerals: () => dispatch(loadMineralsRequest()), 
});

export default connect(mapStateToProps, mapDispatchToProps)(BraceletPost);