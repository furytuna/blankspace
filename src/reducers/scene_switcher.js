import { SET_CURRENT_SCENE } from '../actions/types'
import firebase from 'firebase'

const initialState = "sceneRandomEgg"

const sceneSwitcherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_SCENE: {
      console.log(action)
      localStorage.setItem('currentScene', action.scene)
      firebase.database().ref('users/' + action.uid + '/currentScene').set(action.scene)
      return action.scene
    }

    default: {
      return state
    }
  }
}

export default sceneSwitcherReducer
