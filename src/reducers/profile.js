import { SET_PROFILE } from '../actions/types'
import firebase from 'firebase'

const initialState = null

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE: {
      let newState = { ...state, ...{ profile: action.payload } }
      localStorage.setItem('current_user', JSON.stringify(newState))
      firebase.database().ref('users/' + action.payload.uid).set(newState)
      return newState
    }

    default: {
      return state
    }
  }
}

export default profileReducer
