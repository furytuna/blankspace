import React, { Component } from 'react'
import MusicPlayer from './MusicPlayer'
import { Link } from 'react-router-dom'

class Monster extends Component {
  render() {
    console.log('Monster', this.props.monster)
    console.log('currentMonsterState', this.props.currentMonsterState)
    return (
      <div className="monster-wrapper container has-text-centered column">
        <div className="monster-box">
          <div className="monster-bg" />
          <div className="monster-content">
            <div className="monster-egg">
              <img src={monster.src} />
            </div>
            <div className="monster-detail box">
              <h1 className="title is-4"><b>{monster.name}</b></h1>
              <h1><b>รายการอาหาร</b></h1>
              <ul className="has-text-left">
                { listOfFood }
              </ul>
            </div>
          </div>
        </div>
        <Link to='/sceneFeed' className="button is-primary">ให้อาหาร</Link>
        {/*<audio autoPlay={true}>
          <source src="../assets/audio/intro.mp3" type="audio/mpeg" />
        </audio>*/}
        <MusicPlayer name="Monster"/>
      </div>
    )
  }
}

export default Monster