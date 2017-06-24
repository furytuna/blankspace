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

  playSong = () => {
    this.audio.src = this.state.song
    this.audio.play()
    this.props.setMusicStatus({ this.props.uid, 'PLAY')
  }

  pauseSong = () => {
    this.audio.pause()
    this.props.setMusicStatus(this.props.uid, 'PAUSE')
  }
  
  render() { 
    console.log('state', this.props.uid)
    return(
      <div>
        <button onClick={this.props.music_player == "PLAY" ? this.pauseSong : this.playSong}>|></button>
      </div>
    )
  }
}

export default MusicPlayer
