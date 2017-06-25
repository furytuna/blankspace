import { SET_CURRENT_SCENE } from './types'

const setCurrentScene = (uid, scene) => ({
  type: SET_CURRENT_SCENE,  
  scene: scene,
  uid: uid
})

export {
  setProfile
}