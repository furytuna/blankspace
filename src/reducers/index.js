import { combineReducers } from 'redux'
import profileReducer from './profile'
import monsterReducer from './monster'
import feedReducer from './feed'
import musicReducer from './music_player'
import flashMessageReducer from './flash_message'

const rootReducer = combineReducers({
  profile: profileReducer,
  monster: monsterReducer,
  feed: feedReducer,
  music_player: musicReducer,
  flash_message: flashMessageReducer
})

export default rootReducer
