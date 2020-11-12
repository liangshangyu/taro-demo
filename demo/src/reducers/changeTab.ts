import { CHANGE_TAB } from '../constants/counter'

const INITIAL_STATE = {
  tabIndex: 0
}

export default function changeTab (state = INITIAL_STATE, action) {
  console.log(action)
  switch (action.type) {
    case CHANGE_TAB:
      return {
        ...state,
        tabIndex: action.index
      }
     default:
       return state
  }
}
