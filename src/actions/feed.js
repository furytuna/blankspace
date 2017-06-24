import { SET_FEED_IMAGE } from './types'

const setFeedImage = (image) => ({
  type: SET_FEED_IMAGE,
  payload: image
})

export {
  setFeedImage
}