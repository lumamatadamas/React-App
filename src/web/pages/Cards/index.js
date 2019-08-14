import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CardsContainer from './CardContainer';
import * as CardActions from '../../../reduxConfig/reducers/cards/actions/index';

const mapStateToProps = state => ({
    cards: state.cards,
    ...state });

const mapDispatchToProps = dispatch => bindActionCreators(CardActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CardsContainer);