import {connect} from 'react-redux';
import PostList from './PostList';
import {getPosts} from '../../../redux/postsRedux';

const mapStateToProps = state => ({
  posts: getPosts(state),
});

export default connect(mapStateToProps)(PostList);