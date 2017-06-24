import React, { Component } from 'react'
import firebase from 'firebase'

import AudioPrologue from '../assets/audio/prologue.mp3'
import AudioIntro from '../assets/audio/intro.mp3'
import AudioIntro2 from '../assets/audio/intro2.mp3'
import AudioBattle1 from '../assets/audio/battle1.mp3'

var musicStatus = 'START'

class MusicPlayer extends Component {
  constructor(props) {
    super(props)
  }

  render() {  
    return(
      <div>
        <audio autoPlay={musicStatus === 'START' ? true : false} >
            <source src={AudioPrologue} type="audio/mpeg"/>
        </audio>
      </div>
    )
  }
}

export default MusicPlayer