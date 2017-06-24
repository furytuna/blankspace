import { SET_FLASH_MESSAGE } from './types'

const setFlashMessage = (message) => ({
  type: SET_FLASH_MESSAGE,
  payload: message
})

export {
  setFlashMessage
}
