import {connect} from 'react-redux';
import MyPosts from './MyPosts';
import {getPost} from '../../../redux/postsRedux';

const mapStateToProps = (state, props) => ({
  post: getPost(state, props.match.params.id),
});

export default connect(mapStateToProps)(MyPosts);

