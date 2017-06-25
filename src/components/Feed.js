import React, { Component } from 'react'
import { Redirect } from 'react-router'
import Webcam from '../utils/react-webcam'
import ImageAnalysis from '../utils/react-vision'
import SceneSwitcher from '../containers/SceneSwitcher'

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
    const imageSrc = this.webcam.getScreenshot()
    this.setState({
      img: imageSrc,
      result: null
    })

    this.analyzeImage(imageSrc)
  }

  analyzeImage = (image) => {
    let listOfRequiredFoods = this.props.monster.egg.food

    ImageAnalysis.getDataFromImage(image).then((data) => {
      let matchedImageLabel = listOfRequiredFoods.filter((food) => {
        let resultLabel = JSON.parse(data)[0].labelAnnotations.filter((item) => (item.description.toLowerCase() === food.name.toLowerCase() && food.require > 0)).length > 0
        let resultWeb = JSON.parse(data)[0].webDetection.webEntities.filter((item) => (item.description.toLowerCase() === food.name.toLowerCase() && food.require > 0)).length > 0

        return resultLabel || resultWeb
      })

      let flashMessage = ''

      if (matchedImageLabel.length > 0) {
        let listLabel = matchedImageLabel.map((label) => {
          this.props.decreaseFeedRequirement(this.props.profile.uid, label.name)
          return label.desc
        })

        flashMessage = `ให้อาหาร ${listLabel.join()} แล้ว จย้าา~!!`
        this.props.setFlashMessage(flashMessage)      } else {
        flashMessage = 'ไม่เจออาหาร จย้าา~!'
        this.props.setFlashMessage(flashMessage)
      }
      this.setState({
        result: true
      })
    })
  }

  render() {
    return (
      <div className="is-center">
        <SceneSwitcher accessScene="sceneFeed" />
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
