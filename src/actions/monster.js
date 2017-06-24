import { SET_MONSTER } from './types'

const setMonster = (uid, monster) => ({
  type: SET_MONSTER,
  uid: uid,
  monster: monster
})

export {
  setMonster
}