import { combineReducers } from 'redux'
import profileReducer from './profile'
import feedReducer from './feed'

const rootReducer = combineReducers({
  profile: profileReducer,
  feed: feedReducer
})

export default rootReducer