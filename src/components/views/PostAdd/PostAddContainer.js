import {connect} from 'react-redux';
import PostAdd from './PostAdd';
import {addPost} from '../../../redux/postsRedux';
import {getUserState} from '../../../redux/userStateRedux';

const mapStateToProps = (state) => ({
  userState: getUserState(state),
});

const mapDispatchToProps = dispatch => ({
  addPost: post => dispatch(addPost(post)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostAdd);

