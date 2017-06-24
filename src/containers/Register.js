import { connect } from 'react-redux'
import Register from '../components/Register'
import { setProfile } from '../actions/profile'

const mapStateToProps = (state) => ({
  profile: state.profile
})

const mapDispatchToProps = (dispatch) => ({
  setProfile: (payload) => dispatch(setProfile(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)