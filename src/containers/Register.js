import { connect } from 'react-redux'
import Register from '../components/Register'
import { setProfile } from '../actions/profile'
import { setCurrentScene } from '../actions/current_scene'

const mapStateToProps = (state) => ({
  profile: state.profile,
  currentScene: state.currentScene
})

const mapDispatchToProps = (dispatch) => ({
  setProfile: (payload) => dispatch(setProfile(payload)),
  setCurrentScene: (uid, scene) => dispatch(setCurrentScene(uid, scene))
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)