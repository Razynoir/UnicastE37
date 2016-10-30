import { connect } from 'react-redux';
import { addItem } from '../actions';
import ItemList from './item_list';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  addItem: () => dispatch(addItem("thing"))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList)
