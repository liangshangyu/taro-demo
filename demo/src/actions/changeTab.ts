import { CHANGE_TAB } from '../constants/counter'

export const changeTabAction = ({ index }) => {
    return {
      type: CHANGE_TAB,
      index: index
    }
  }