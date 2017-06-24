import { connect } from 'react-redux'
import Monster from '../components/Monster'

const mapStateToProps = (state) => ({
  monster: state.monster.mature,
  currentMonsterState: state.monster.state
})

export default connect(mapStateToProps)(Monster)