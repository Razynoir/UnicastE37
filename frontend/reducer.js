import { ADD_MONEY } from './actions'

const _defaultState = {
  money: 0
}

const reducer = (oldState, action) => {
  switch(action.type){
    case "ADD_MONEY":
      return {
        money: oldState['money'] + 100
      }
    default:
      return _defaultState;
  }
}

export default reducer;
