import React, { Component } from 'react'
import firebase from 'firebase'
import songs from '../config/audioConfig'

class MusicPlayer extends Component {
  constructor(props) {
    super(props)
    this.audio = new Audio
    this.audio.loop = true
    this.state = {
      autoplay: true,
      playing: false,
      song: songs[props.name]
    }
  }

  componentDidMount() {
    if (this.state.autoplay) {
      this.playSong()
    }
  }

  playSong = () => {
    this.setState({ playing: true })
    this.audio.src = this.state.song
    this.audio.play()
  }

  pauseSong = () => {
    this.setState({ playing: false})
    this.audio.pause()
  }
  
  render() { 
    return(
      <div>
        <button onClick={this.state.playing ? this.pauseSong : this.playSong}>|></button>
      </div>
    )
  }
}

export default MusicPlayer