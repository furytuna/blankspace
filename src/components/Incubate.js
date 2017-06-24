import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Eggs from '../config/eggsConfig'

class Incubate extends Component {
  constructor(props) {
    super(props)
  }
  handleCameraOnChange = (e) => {
    let file = e.target.files[0];
    // console.log(file)
    // console.log(URL.createObjectURL(file))
    // this.setState({
    //   img: URL.createObjectURL(file)
    // })
    this.props.setFeedImage(URL.createObjectURL(file))
  }
  render() {
    return (
      <div>
        <img src={Eggs.Rockman.egg.src} />
        <h1>{Eggs.Rockman.egg.name}</h1>
        <h2>รายการอาหาร</h2>
        <ul>
          {Eggs.Rockman.egg.food.map((food) => {
            console.log(food);
            return (<li>{food.desc} {food.require} อัน</li>);
          })}
        </ul>
        <input className="button is-primary" type="file" accept="image/*" capture="camera" id="camera" onChange={this.handleCameraOnChange} />
        <audio autoPlay={true}>
          <source src="../assets/audio/intro.mp3" type="audio/mpeg" />
        </audio>
      </div>
    )
  }
}

export default Incubate
