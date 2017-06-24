import { SET_FEED_IMAGE, DECREASE_FEED_REQUIREMENT } from './types'

const setFeedImage = (image) => ({
  type: SET_FEED_IMAGE,
  payload: image
})

const decreateFeedRequirement = (foodName) => ({
  type: DECREASE_FEED_REQUIREMENT,
  payload: foodName
})

export {
  setFeedImage,
  decreateFeedRequirement
}
