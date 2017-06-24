import { SET_MONSTER } from '../actions/types'
import firebase from 'firebase'

const initialState = null

const monsterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MONSTER: {
      console.log(action)
      let newState = { ...action.monster, ...{currentState: 'egg' }}
      localStorage.setItem('monster', JSON.stringify(newState))
      firebase.database().ref('users/' + action.uid + '/monster').set(newState)
      return newState
    }

    default: {
      return state
    }
  }
}

export default monsterReducer
