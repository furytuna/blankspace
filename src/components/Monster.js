import React, { Component } from 'react'
import MusicPlayer from '../containers/MusicPlayer'
import SceneSwitcher from '../containers/SceneSwitcher'

class Monster extends Component {
  render() {
    let monster = (this.props.monster) ? this.props.monster.mature : {}
    return (
      <div className="monster-wrapper container has-text-centered column">
        <SceneSwitcher accessScene="sceneMonster" />
        <div className="monster-box">
          <div className="monster-bg" />
          <div className="monster-content">
            <div className="monster-mature">
              <img src={monster.src} alt={monster.name}/>
            </div>
            <div className="monster-detail box">
              <h1 className="title is-4"><b>{monster.name}</b></h1>
              <p>{monster.history}</p>
            </div>
          </div>
        </div>
        <MusicPlayer name="Monster"/>
      </div>
    )
  }
}

export default Monster
