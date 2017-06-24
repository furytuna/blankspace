import { connect } from 'react-redux'
import RamdomEgg from '../components/RandomEgg'
import { setMonster } from '../actions/monster'

const mapStateToProps = (state) => ({
  monster: state.monster,
  uid: state.profile.uid
})

const mapDispatchToProps = (dispatch) => ({
  setMonster: (uid, monster) => dispatch(setMonster(uid, monster))
})

export default connect(mapStateToProps, mapDispatchToProps)(RamdomEgg)