import { SET_FEED_IMAGE } from '../actions/types'
import firebase from 'firebase'

const initialState = null

const feedReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FEED_IMAGE: {
      let newState = { ...state, ...{ sceneFeed: { image: action.payload } } }
      console.log(newState)
      firebase.database().ref('users/' + state.profile.uid).set(newState)
      return newState
    }

    default: {
      return state
    }
  }
}

export default feedReducer