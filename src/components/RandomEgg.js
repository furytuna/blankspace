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
    if (!(localData && localData.profile.uid)) {
      this.setState({ toHome: false })
    }
  }

  render() {
    console.log(this.state.toHome);
    return (
      <div className="random-egg-wrapper container has-text-centered column">
        { this.state.toHome && <Redirect to="/" /> }
        <div className="random-egg-box">
          <div className="random-egg-bg box" />
          <div className="random-egg-content">
              <h1 className="title"><b>เลือก Monster คู่กาย</b></h1>
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
