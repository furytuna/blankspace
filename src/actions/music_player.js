import { SET_MUSIC_STATUS } from './types'

const setMusicStatus = (uid, status) => ({
  type: SET_MUSIC_STATUS,
  payload: {
    uid: uid, 
    status: status
  }
})

export {
  setMusicStatus
}
