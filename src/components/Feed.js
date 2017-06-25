import React, { Component } from 'react'
import { Redirect } from 'react-router'
import Webcam from '../utils/react-webcam'
import ImageAnalysis from '../utils/react-vision'

export default class Feed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      img: '',
      result: false
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
    let flashMessage = ''

    ImageAnalysis.getDataFromImage(image).then((data) => {
      let matchedImageLabel = listOfRequiredFoods.filter((food) => {
        let resultLabel = JSON.parse(data)[0].labelAnnotations.filter((item) => (item.description.toLowerCase() === food.name.toLowerCase() && food.require > 0)).length > 0
        let resultWeb = JSON.parse(data)[0].webDetection.webEntities.filter((item) => (item.description.toLowerCase() === food.name.toLowerCase() && food.require > 0)).length > 0

        return resultLabel || resultWeb
      })

      if (matchedImageLabel.length > 0) {
        let listLabel = matchedImageLabel.map((label) => {
          this.props.decreateFeedRequirement(this.props.monster.egg.food, label.name)
          return label.desc
        })

        flashMessage = `ให้อาหาร ${listLabel.join()} แล้ว จย้าา~!!`
      } else {
        flashMessage = 'ไม่เจออาหาร จย้าา~!'
      }

      this.props.setFlashMessage(flashMessage)
      this.setState({
        result: true
      })
    })
  }

  render() {
    let monster = this.props.monster.egg;
    let listOfFood = monster.food.map((food) => {
      return (<li key={food.name}>- {food.desc} {food.require} อัน</li>) ;
    })

    return (
      <div className="is-center">

        <div className="feed-wrapper container has-text-centered column">
          <div className="feed-box">
            { this.state.result ? (
              <div className="feed-picture box">
                <img src={this.state.img} alt="captured images"/>
                <Redirect to='/sceneIncubate' />
              </div>
            ) : (
              <div className="feed-camera box">
                <Webcam audio={false} height={350} width={350} ref={this.setRef} screenshotFormat="image/jpeg" />
                <div>
                  <button onClick={this.capture} className="button is-primary">ให้อาหาร</button>
                </div>
              </div>
            ) }
            <div className="feed-detail box">
            <h1><b>รายการอาหาร</b></h1>
            <ul className="feed-list-food has-text-left">
              { listOfFood }
            </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
