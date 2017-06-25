import { connect } from 'react-redux'
import { Prologue } from '../components/Prologue'

const mapStateToProps = (state) => ({
  profile: state.profile,
  currentScene: state.currentScene
})

export default connect(mapStateToProps)(Prologue)
