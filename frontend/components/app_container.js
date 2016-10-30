import { connect } from 'react-redux';
import { addMoney } from '../actions';
import moneyCounter from './money_counter';

const mapStateToProps = function(state){
  return {
    money: state.money
  };
}

const mapDispatchToProps = dispatch => ({
  addMoney: () => dispatch(addMoney)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(moneyCounter)
