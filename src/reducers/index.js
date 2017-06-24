import { combineReducers } from 'redux'
import profileReducer from './profile'
import monsterReducer from './monster'

const rootReducer = combineReducers({
  profile: profileReducer,
  monster: monsterReducer
})

export default rootReducer