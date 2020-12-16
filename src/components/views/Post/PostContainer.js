import {connect} from 'react-redux';
import Post from './Post';
import {getPost} from '../../../redux/postsRedux';

const mapStateToProps = (state, props) => ({
  post: getPost(state, props.match.params.id),
});

export default connect(mapStateToProps)(Post);

