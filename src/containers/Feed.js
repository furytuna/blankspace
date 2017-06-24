import { connect } from 'react-redux'
import Feed from '../components/Feed'
import { decreateFeedRequirement } from '../actions/feed'

const mapStateToProps = (state) => ({
  monster: state.monster
})

const mapDispatchToProps = (dispatch) => ({
  decreateFeedRequirement: (payload) => dispatch(decreateFeedRequirement(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Feed)
