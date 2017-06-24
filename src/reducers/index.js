import { combineReducers } from 'redux'
import profileReducer from './profile'
import feedReducer from './feed'
import musicReducer from './music_player'

const rootReducer = combineReducers({
  profile: profileReducer,
  feed: feedReducer,
  music_player: musicReducer
})

export default rootReducer
