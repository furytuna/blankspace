import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class RandomEgg extends Component {
  render() {
    return (
      <div className="random-egg-wrapper container has-text-centered column">
        <div className="random-egg-box">
          <div className="random-egg-bg box" />
          <div className="random-egg-content">
              <h1 className="title">เลือก Monster คู่กาย</h1>
              Monster ตัวนี้จะคอยติดตามคุณไปทุกที่
              มันจะร่วมต่อสู้และผจญภัยไปคุณ
          </div>
        </div>
        <Link to='/sceneIncubate' className="button is-primary">สุ่ม Monster</Link>
        <audio autoPlay={true}>
            <source src="../assets/audio/intro.mp3" type="audio/mpeg"/>
        </audio>
      </div>
    )
  }
}
