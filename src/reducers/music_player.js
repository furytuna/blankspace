import { SET_MUSIC_STATUS } from '../actions/types'
import firebase from 'firebase'

const initialState = "PLAY"

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MUSIC_STATUS: {
      let newState = action.payload.status
      localStorage.setItem('music_player', newState)

      if (action.payload.uid) {
        firebase.database().ref('users/' + action.payload.uid + '/music_player').set(newState)
      }

      return newState
    }

    default: {
      return state
    }
  }
}

export default musicReducer
