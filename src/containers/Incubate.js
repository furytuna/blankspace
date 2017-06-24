import { connect } from 'react-redux'
import Incubate from '../components/Incubate'

const mapStateToProps = (state) => ({
  monster: state.monster,
  uid: state.profile.uid
})


export default connect(mapStateToProps)(Incubate)
