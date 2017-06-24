import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Webcam from '../utils/react-webcam'

export default class Feed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      img: ''
    }
  }
  setRef = (webcam) => {
    this.webcam = webcam;
  }
  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
    alert(imageSrc)
    this.setState({
      img: imageSrc
    })
  }
  render() {
    return (
      <div className="is-center">
        <h1>Feed</h1>
        {this.state.img === ''? (
          <Webcam
          audio={false}
          height={350}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={350}
        />) : (
        <img src={this.state.img} />
        )}
        <button onClick={this.capture} className="button is-primary">ให้อาหาร</button>
      </div>
    )
  }
}