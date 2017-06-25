import { SET_MONSTER, DECREASE_FEED_REQUIREMENT } from './types'

const setMonster = (uid, monster) => ({
  type: SET_MONSTER,
  uid: uid,
  monster: monster
})

const decreaseFeedRequirement = (uid, foodName) => ({
  type: DECREASE_FEED_REQUIREMENT,
  uid: uid,
  foodName: foodName
})

export {
  setMonster,
  decreaseFeedRequirement
}