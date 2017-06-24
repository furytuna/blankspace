import { SET_FLASH_MESSAGE } from '../actions/types'

const initialState = null

const flashMessageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FLASH_MESSAGE: {
      console.log(action)
      let newState = action.payload
      return newState
    }
    default: {
      return state
    }
  }
}

export default flashMessageReducer
