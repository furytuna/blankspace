import { connect } from 'react-redux'
import Feed from '../components/Feed'
import { setFeedImage, decreateFeedRequirement } from '../actions/feed'

// const mapDispatchToProps = (dispatch) => ({
//   setFeedImage: (payload) => dispatch(setFeedImage(payload))
// })

// const mapStateToProps = (state) => ({
//   feed: state.feed
// })

const mapDispatchToProps = (dispatch) => ({
  decreateFeedRequirement: (payload) => dispatch(decreateFeedRequirement(payload))
})

export default connect(null, mapDispatchToProps)(Feed)
// export default connect(null, mapDispatchToProps)(Feed)
