import React, { Component } from 'react'
import { Redirect } from 'react-router'
import Webcam from '../utils/react-webcam'
import ImageAnalysis from '../utils/react-vision'

export default class Feed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      img: ''
    }
  }
  setRef = (webcam) => {
    this.webcam = webcam
  }

  capture = () => {
    console.log('capture')
    const imageSrc = this.webcam.getScreenshot()
    this.setState({
      img: imageSrc,
      result: null
    })

    this.analyzeImage(imageSrc)
  }

  analyzeImage = (image) => {
    let listOfRequiredFoods = this.props.monster.egg.food

    console.log(listOfRequiredFoods)

    ImageAnalysis.getDataFromImage(image).then((data) => {
      console.log(data)
      let matchedImageLabel = listOfRequiredFoods.filter((food) => {
        return JSON.parse(data)[0].labelAnnotations.filter((item) => (item.description === food.name && food.require > 0)).length > 0
      })

      console.log('Matched label: ', matchedImageLabel);

      if (matchedImageLabel.length > 0) {
        matchedImageLabel.map((label) => (
          this.props.decreateFeedRequirement(this.props.monster.egg.food, label.name)
        ))
        this.props.setFlashMessage('Matched food & Decrease')
        console.log('Matched food & Decrease')
      } else {
        this.props.setFlashMessage('Not matched food')
        console.log('Not matched food')
      }
      this.setState({
        result: true
      })
    })
  }

  render() {
    return (
      <div className="is-center">
        <h1>Feed</h1>
        <div>
        {
          this.state.img === '' ? (
            <Webcam
            audio={false}
            height={350}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            width={350}
          />) : (
          <img src={this.state.img} alt="captured images"/>
          )
        }
        {this.state.result? (
          <Redirect to='/sceneIncubate' />
        ):('')}
        </div>
        <button onClick={this.capture} className="button is-primary">ให้อาหาร</button>
      </div>
    )
  }
}
