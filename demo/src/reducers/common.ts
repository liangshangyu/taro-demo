import { handleActions } from 'redux-actions'
// import { TOGGLE_MASK } from '../constants/counter'
import * as actionTypes from '../constants/counter'

const INITIAL_STATE = {
  showMask: false
}

const commonReducer = handleActions({
    [actionTypes.TOGGLE_MASK]: (state = INITIAL_STATE, action) => {
        console.log(action)
            return {
            ...state,
            showMask: action.flag
            }
      }
}, INITIAL_STATE)
export default commonReducer