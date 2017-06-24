import React, { Component } from 'react'
import MusicPlayer from './MusicPlayer'
import { Link } from 'react-router-dom'

class Monster extends Component {
  render() {
    let monster = this.props.monster
    console.log('Monster', this.props.monster)
    console.log('currentMonsterState', this.props.currentMonsterState)
    return (
      <div className="monster-wrapper container has-text-centered column">
        <div className="monster-box">
          <div className="monster-bg" />
          <div className="monster-content">
            <div className="monster-mature">
              <img src={monster.src} />
            </div>
            <div className="monster-detail box">
              <h1 className="title is-4"><b>{monster.name}</b></h1>
              <h1><b>ความเป็นมา</b></h1>
              <p></p>
            </div>
          </div>
        </div>
        <MusicPlayer name="Monster"/>
      </div>
    )
  }
}

export default Monster