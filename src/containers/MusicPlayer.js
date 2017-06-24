import { connect } from 'react-redux'
import MusicPlayer from '../components/MusicPlayer'
import { setMusicStatus } from '../actions/music_player'

const mapDispatchToProps = (dispatch) => ({
  setMusicStatus: (uid, musicStatus) => dispatch(setMusicStatus(uid, musicStatus))
})

const mapStateToProps = (state) => ({
  music_player: state.music_player,
  uid: state.profile.uid
})

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayer)