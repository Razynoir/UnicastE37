import { createStore } from 'redux';
import reducer from './reducer.js';
import { modifyInventoryWithSpecs, switchNode, addJournalEntry } from './actions.js';

const store = createStore(reducer); // instantiate app's store with app's reducer

export default store;
