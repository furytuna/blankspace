import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Login from '../utils/login'
import Eggs from '../config/eggsConfig'
import MusicPlayer from '../containers/MusicPlayer'
import SceneSwiter from '../containers/SceneSwitcher'

export default class RandomEgg extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toHome: false
    }
    if (!props.monster) {
      let keys = Object.keys(Eggs)
      let random_key_number = Math.floor(Math.random() * keys.length)
      let monster = Eggs[keys[random_key_number]]
      props.setMonster(props.uid, monster)
    }
    
  }

  componentWillUnmount() {
    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
    if ("vibrate" in navigator) {
      console.log("vibration API supported")
      navigator.vibrate([500, 300, 100]);
    } else {
      console.log("vibration API not supported")
    }
  }


  componentWillMount() {
    let localData = Login.getLocalData()
    if (!Login.isLoggedIn()) {
      this.setState({ toHome: true })
    }
  }

  render() {
    console.log(this.state.toHome);
    return (
      <div className="random-egg-wrapper container has-text-centered column">
        <SceneSwiter accessScene="sceneRandomEgg" />
        { this.state.toHome && <Redirect to="/" /> }
        <div className="random-egg-box">
          <div className="random-egg-bg box" />
          <div className="random-egg-content">
              <h1 className="title"><b>เลือก "TunaGotchi" คู่กาย</b></h1>
              Tunagotchi ตัวนี้จะคอยติดตามคุณไปทุกที่
              มันจะร่วมต่อสู้และผจญภัยไปคุณ
          </div>
        </div>
        <Link to='/sceneIncubate' className="button is-primary">สุ่ม Tunagotchi</Link>
        <MusicPlayer name="RandomEgg"/>
      </div>
    )
  }
}
