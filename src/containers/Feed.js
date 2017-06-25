import { connect } from 'react-redux'
import Feed from '../components/Feed'
import { decreaseFeedRequirement } from '../actions/monster'
import { setFlashMessage } from '../actions/flash_message'

const mapStateToProps = (state) => ({
  monster: state.monster,
  profile: state.profile
})

const mapDispatchToProps = (dispatch) => ({
  decreaseFeedRequirement: (uid, foodName) => dispatch(decreaseFeedRequirement(uid, foodName)),
  setFlashMessage: (message) => dispatch(setFlashMessage(message))
})

export default connect(mapStateToProps, mapDispatchToProps)(Feed)
