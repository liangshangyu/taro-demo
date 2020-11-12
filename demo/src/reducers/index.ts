import { combineReducers } from 'redux'
import counter from './counter'
import changeTab from './changeTab'
import commonReducer from './common'

export default combineReducers({
  counter,
  changeTab,
  commonReducer
})
