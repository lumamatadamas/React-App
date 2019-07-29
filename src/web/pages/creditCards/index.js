import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CreditCardsContainer from './creditCardContainer';
import * as CreditCardActions from '../../../reduxConfig/reducers/cards/actions/index';

const mapStateToProps = state => ({
    creditCardsList: state.creditCardsList,
    ...state });

const mapDispatchToProps = dispatch => bindActionCreators(CreditCardActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreditCardsContainer);