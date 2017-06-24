import { connect } from 'react-redux'
import Incubate from '../components/Incubate'
import { setFeedImage } from '../actions/feed'

const mapDispatchToProps = (dispatch) => ({
  setFeedImage: (payload) => dispatch(setFeedImage(payload))
})

export default connect(null, mapDispatchToProps)(Incubate)