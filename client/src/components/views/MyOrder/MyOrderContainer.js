import {connect} from 'react-redux';
import MyOrder from './MyOrder';
import {addPost} from '../../../redux/postsRedux';
import {getUserState} from '../../../redux/userStateRedux';

const mapStateToProps = (state) => ({
  userState: getUserState(state),
});

const mapDispatchToProps = dispatch => ({
  addPost: post => dispatch(addPost(post)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyOrder);

