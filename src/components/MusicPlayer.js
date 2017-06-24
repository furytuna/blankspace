import React, { Component } from 'react'
import firebase from 'firebase'
import songs from '../config/audioConfig'

class MusicPlayer extends Component {
  constructor(props) {
    super(props)
    this.audio = new Audio
    this.audio.loop = true
    this.state = {
      song: songs[props.name]
    }
  }

  componentDidMount() {
    if (this.props.music_player == "PLAY") {
      this.playSong()
    }
  }

  componentWillUnmount() {
    this.audio.stop()
  }

  playSong = () => {
    this.audio.src = this.state.song
    this.audio.play()
    this.props.setMusicStatus(this.props.uid, 'PLAY')
  }

  pauseSong = () => {
    this.audio.pause()
    this.props.setMusicStatus(this.props.uid, 'PAUSE')
  }
  
  render() { 
    return(
      // <footer className="footer">
        <div className="container musicplayer-container">
          <div className="content has-text-centered">
            <a className="is-danger is-inverted is-outlined" onClick={this.props.music_player == "PLAY" ? this.pauseSong : this.playSong}>
              Music { this.props.music_player == "PLAY" ? "On":"Off" }
            </a>
          </div>
        </div>
      // </footer>
    )
  }
}

export default MusicPlayer
