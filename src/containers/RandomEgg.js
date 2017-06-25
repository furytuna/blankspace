import { connect } from 'react-redux'
import RamdomEgg from '../components/RandomEgg'
import { setMonster } from '../actions/monster'
import { setCurrentScene } from '../actions/current_scene'

const mapStateToProps = (state) => ({
  monster: state.monster,
  uid: state.profile.uid,
  currentScene: state.currentScene
})

const mapDispatchToProps = (dispatch) => ({
  setMonster: (uid, monster) => dispatch(setMonster(uid, monster)),
  setCurrentScene: (uid, scene) => dispatch(setCurrentScene(uid, scene))
})

export default connect(mapStateToProps, mapDispatchToProps)(RamdomEgg)