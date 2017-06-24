import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MusicPlayer from './MusicPlayer'

export default class RandomEgg extends Component {
  render() {
    return (
      <div className="random-egg-wrapper has-text-centered column">
        <div className="random-egg-box box">
            <div className="random-egg--content">
                <h1 className="title">เลือก Tunagotchi คู่กาย</h1>
                <p>Tunagotchi ตัวนี้จะคอยติดตามคุณไปทุกที่</p>
                <p>มันจะร่วมต่อสู้และผจญภัยไปคุณ</p>
                <Link to='/sceneIncubate' className="button is-primary">กดเด้!</Link>
            </div>
        </div>
        <MusicPlayer name="RandomEgg"/>
      </div>
    )
  }
}