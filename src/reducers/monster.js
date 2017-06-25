import { SET_MONSTER, DECREASE_FEED_REQUIREMENT } from '../actions/types'
import firebase from 'firebase'

const initialState = null

const monsterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MONSTER: {
      let newState = { ...action.monster, ...{currentState: 'egg' }}
      localStorage.setItem('monster', JSON.stringify(newState))
      firebase.database().ref('users/' + action.uid + '/monster').set(newState)
      return newState
    }
    case DECREASE_FEED_REQUIREMENT: {
      let foodName = action.foodName
      let newState = { ...state }

      let newFood = newState.egg.food.map((food) => {
        if (food.name === foodName && food.require > 0) {
          food.require = food.require - 1
        }
        return food
      })
      let remainingFoods = newState.egg.food.filter((food) => {
        return food.require > 0
      })
      if (remainingFoods.length === 0) {
        newState.currentState = 'mature'
      }
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
