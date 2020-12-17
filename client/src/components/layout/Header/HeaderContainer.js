import {connect} from 'react-redux';
import Header from './Header';
import {getUserState, changeSearchPhrase} from '../../../redux/userStateRedux';

const mapStateToProps = state => ({
  userState: getUserState(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);