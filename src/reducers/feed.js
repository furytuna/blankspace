import { SET_FEED_IMAGE, DECREASE_FEED_REQUIREMENT } from '../actions/types'
import firebase from 'firebase'

const initialState = {}

const feedReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FEED_IMAGE: {
      let newState = { ...state, ...{ sceneFeed: { image: action.payload } } }
      firebase.database().ref('users/' + state.profile.uid).set(newState)
      return newState
    }

    case DECREASE_FEED_REQUIREMENT: {
      let foodName = action.payload.foodName
      let requiredFoods = action.payload.requiredFoods

      console.log('Food:', foodName)

      let newFood = requiredFoods.map((food) => {
        if (food.name === foodName && food.require > 0) {
          food.require = food.require - 1
        }
        return food;
      })
      let newState = { ...state, ...{newFood}}

      console.log(newState)

      return newState
    }

    default: {
      return state
    }
  }
}

export default feedReducer
