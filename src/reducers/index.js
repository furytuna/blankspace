import { combineReducers } from 'redux'
import profileReducer from './profile'
import monsterReducer from './monster'
import musicReducer from './music_player'
import flashMessageReducer from './flash_message'

const rootReducer = combineReducers({
  profile: profileReducer,
  monster: monsterReducer,
  music_player: musicReducer,
  flash_message: flashMessageReducer
})

export default rootReducer
