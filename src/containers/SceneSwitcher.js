import { connect } from 'react-redux'
import SceneSwitcher from '../components/SceneSwitcher'

const mapStateToProps = (state) => ({
  currentScene: state.currentScene,
  uid: state.profile.uid
})

export default connect(mapStateToProps)(SceneSwitcher)
