import { connect } from 'react-redux'
import Incubate from '../components/Incubate'
import { setCurrentScene } from '../actions/current_scene'

const mapStateToProps = (state) => ({
  monster: state.monster,
  uid: state.profile.uid,
  flashMessage: state.flash_message
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentScene: (uid, scene) => dispatch(setCurrentScene(uid, scene))
})

export default connect(mapStateToProps, mapDispatchToProps)(Incubate)
