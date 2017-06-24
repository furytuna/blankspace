import { SET_PROFILE } from '../actions/types'

const initialState = null

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE: {
      return { ...state, ...{ profile: action.payload } }
    }

    default: {
      return state
    }
  }
}

export default profileReducer