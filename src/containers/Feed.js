import { connect } from 'react-redux'
import Feed from '../components/Feed'
import { decreateFeedRequirement } from '../actions/feed'
import { setFlashMessage } from '../actions/flash_message'

const mapStateToProps = (state) => ({
  monster: state.monster
})

const mapDispatchToProps = (dispatch) => ({
  decreateFeedRequirement: (requiredFoods, foodName) => dispatch(decreateFeedRequirement(requiredFoods, foodName)),
  setFlashMessage: (message) => dispatch(setFlashMessage(message))
})

export default connect(mapStateToProps, mapDispatchToProps)(Feed)
