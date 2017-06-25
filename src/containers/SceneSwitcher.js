import { connect } from 'react-redux'
import SceneSwitcher from '../components/SceneSwitcher'

const mapStateToProps = (state) => ({
  currentScene: state.currentScene
})

export default connect(mapStateToProps)(SceneSwitcher)
