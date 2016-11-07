import { connect } from 'react-redux';
import { modifyInventoryWithSpecs, switchNode, switchMode, addJournalEntry } from '../actions';

import AppContent from './app_content';

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  modifyInventoryWithSpecs: (specs) => dispatch(modifyInventoryWithSpecs(specs)),
  switchNode: (nextNode) => dispatch(switchNode(nextNode)),
  switchMode: (newMode) => dispatch(switchMode(newMode)),
  addJournalEntry: (newEntry) => dispatch(addJournalEntry(newEntry)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContent)
