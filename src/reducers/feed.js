import { SET_FEED_IMAGE, DECREASE_FEED_REQUIREMENT } from '../actions/types'
import firebase from 'firebase'

// const initialState = {}
const initialState = {
  'foods': [
    {
      name: "sky",
      desc: "ท้องฟ้า",
      require: 1
    },
    {
      name: "rock",
      desc: "หิน",
      require: 3
    },
    {
      name: "male",
      desc: "ผู้ชาย",
      require: 1
    },
    {
      name: "glasses",
      desc: "แว่นตา",
      require: 1
    }
  ]
}

const feedReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FEED_IMAGE: {
      let newState = { ...state, ...{ sceneFeed: { image: action.payload } } }
      firebase.database().ref('users/' + state.profile.uid).set(newState)
      return newState
    }
    case DECREASE_FEED_REQUIREMENT: {
      let foodName = action.payload
      let newfood = state.foods.map((food) => {
        if (food.name === foodName) {
          food.require = food.require - 1
        }
        return food;
      })
      let newState = { ...state, ...{ newfood }}
      return state
    }

    default: {
      return state
    }
  }
}

export default feedReducer
