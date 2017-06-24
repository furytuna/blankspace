import { combineReducers } from 'redux'
import profileReducer from './profile'
import monsterReducer from './monster'
import feedReducer from './feed'
import musicReducer from './music_player'

const rootReducer = combineReducers({
  profile: profileReducer,
  monster: monsterReducer,
  feed: feedReducer,
  music_player: musicReducer
})

export default rootReducer
