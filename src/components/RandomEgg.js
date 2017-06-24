import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Login from '../utils/login'

export default class RandomEgg extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toHome: false
    }
  }

  componentWillMount() {
    let localData = Login.getLocalData()
    console.log(localData)
    if (!Login.isLoggedIn()) {
      this.setState({ toHome: true })
    }
  }

  render() {
    return (
      <div className="random-egg-wrapper">
        { this.state.toHome && <Redirect to="/" /> }
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