import {connect} from 'react-redux';
import PostEdit from './PostEdit';
import {getPost} from '../../../redux/postsRedux';
import {getUserState} from '../../../redux/userStateRedux';

const mapStateToProps = (state, props) => ({
  post: getPost(state, props.match.params.id),
  userState: getUserState(state),
});

export default connect(mapStateToProps)(PostEdit);

