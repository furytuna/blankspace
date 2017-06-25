import { connect } from 'react-redux'
import Feed from '../components/Feed'
import { decreaseFeedRequirement } from '../actions/monster'
import { setFlashMessage } from '../actions/flash_message'
import { setCurrentScene } from '../actions/current_scene'

const mapStateToProps = (state) => ({
  monster: state.monster,
  profile: state.profile
})

const mapDispatchToProps = (dispatch) => ({
  decreaseFeedRequirement: (uid, foodName) => dispatch(decreaseFeedRequirement(uid, foodName)),
  setFlashMessage: (message) => dispatch(setFlashMessage(message)),
  setCurrentScene: (uid, scene) => dispatch(setCurrentScene(uid, scene))
})

export default connect(mapStateToProps, mapDispatchToProps)(Feed)
