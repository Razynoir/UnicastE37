import { connect } from 'react-redux';
import { modifyInventoryWithSpecs, switchNode } from '../actions';

import ItemList from './item_list';

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  modifyInventoryWithSpecs: (specs) => dispatch(modifyInventoryWithSpecs(specs)),
  switchNode: (nextNode) => dispatch(switchNode(nextNode))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList)
