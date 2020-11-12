import { TOGGLE_MASK } from '../constants/counter'

export const changeTabAction = ({ flag }) => {
    return {
      type: TOGGLE_MASK,
      index: flag
    }
  }