import { SET_PROFILE } from '../actions/types'
import firebase from 'firebase'

const initialState = null

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE: {
      console.log('State', state)
      console.log('Payload', action.payload)
      let newState = action.payload
      localStorage.setItem('profile', JSON.stringify(newState))
      firebase.database().ref('users/' + action.payload.uid + '/profile').set(newState)
      return newState
    }

    default: {
      return state
    }
  }
}

export default profileReducer
