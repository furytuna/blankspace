import { combineReducers } from 'redux'
import profileReducer from './profile'
<<<<<<< HEAD
import monsterReducer from './monster'

const rootReducer = combineReducers({
  profile: profileReducer,
  monster: monsterReducer
=======
import feedReducer from './feed'
import musicReducer from './music_player'

const rootReducer = combineReducers({
  profile: profileReducer,
  feed: feedReducer,
  music_player: musicReducer
>>>>>>> 019e44e14bac107c2d224badcc95555276d186f8
})

export default rootReducer
