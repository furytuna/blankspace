import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Eggs from '../config/eggsConfig'

class Incubate extends Component {
  constructor(props) {
    super(props)
  }
  handleCameraOnChange = (e) => {
    let file = e.target.files[0];
    this.props.setFeedImage(URL.createObjectURL(file))
  }
  render() {
    return (
      <div className="incubate-wrapper container has-text-centered column">
        <div className="incubate-box">
          <div className="incubate-bg" />
          <div className="incubate-content">
            <div className="incubate-egg">
              <img src={Eggs.Rockman.egg.src} />
            </div>
            <div className="incubate-detail box">
              <h1 className="title is-4"><b>{Eggs.Rockman.egg.name}</b></h1>
              <h1><b>รายการอาหาร</b></h1>
              <ul className="has-text-left">
                {Eggs.Rockman.egg.food.map((food) => {
                  console.log(food);
                  return (<li>- {food.desc} {food.require} อัน</li>);
                })}
              </ul>
            </div>
          </div>
        </div>
        <audio autoPlay={true}>
          <source src="../assets/audio/intro.mp3" type="audio/mpeg" />
        </audio>
      </div>
    )
  }
}

export default Incubate
