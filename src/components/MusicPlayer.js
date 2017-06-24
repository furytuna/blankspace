import React, { Component } from 'react'
import firebase from 'firebase'
import audio from '../config/audioConfig'

var musicStatus = 'START'

class MusicPlayer extends Component {
  constructor(props) {
    super(props)
  }
  
  render() { 
    console.log(this.audio) 
    return(
      <div>
        <audio autoPlay={musicStatus === 'START' ? true : false} >
            <source src={audio[this.props.name]} type="audio/mpeg"/>
        </audio>
      </div>
    )
  }
}

export default MusicPlayer