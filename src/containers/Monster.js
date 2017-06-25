import { connect } from 'react-redux'
import Monster from '../components/Monster'

const mapStateToProps = (state) => ({
  monster: state.monster,
})

export default connect(mapStateToProps)(Monster)