import { connect } from 'react-redux';
import { modifyInventoryWithSpecs } from '../actions';

import ItemList from './item_list';

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  modifyInventoryWithSpecs: (specs) => dispatch(modifyInventoryWithSpecs(specs))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList)
