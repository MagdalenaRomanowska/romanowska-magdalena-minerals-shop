import {connect} from 'react-redux';
import Footer from './Footer';
import {getUserState, changeSearchPhrase} from '../../../redux/userStateRedux';

const mapStateToProps = state => ({
  userState: getUserState(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);