import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class RandomEgg extends Component {
  render() {
    return (
      <div className="random-egg-wrapper">
        <h1 className="title">เลือก Monster คู่กาย</h1>
        <p>Monster ตัวนี้จะคอยติดตามคุณไปทุกที่</p>
        <p>มันจะร่วมต่อสู้และผจญภัยไปคุณ</p>
        <Link to='/sceneIncubate' className="button is-primary">สุ่ม Monster</Link>
        <audio autoPlay={true}>
            <source src="../assets/audio/intro.mp3" type="audio/mpeg"/>
        </audio>
      </div>
    )
  }
}