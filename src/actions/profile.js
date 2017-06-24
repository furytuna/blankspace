import { SET_PROFILE } from './types'

const setProfile = (profile) => ({
  type: SET_PROFILE,
  payload: profile
})

export {
  setProfile
}