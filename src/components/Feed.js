import React, { Component } from 'react'
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
    const imageSrc = this.webcam.getScreenshot()
    this.setState({
      img: imageSrc
    })

    this.analyst(imageSrc)
  }

  analyst = (image) => {
    // let listOfRequiredFoods = this.props.monster.egg.food
    let listOfRequiredFoods = []

    ImageAnalysis.getDataFromImage(image).then((data) => {
      let matchedImageLabel = listOfRequiredFoods.filter((food) => {
        return JSON.parse(data)[0].labelAnnotations.filter((item) => (item.description === food.name)).length > 0
      })

      if (matchedImageLabel) {
        matchedImageLabel.map((label) => (
          this.props.decreateFeedRequirement(label.name)
        ))

        console.log('Matched food & Decrease')
      } else {
        console.log('Not matched food')
      }
    })
  }

  render() {
    return (
      <div className="is-center">
        <h1>Feed</h1>
        {this.state.img === '' ? (
          <Webcam
          audio={false}
          height={350}
          ref={this.setRef}
          screenshotFormat="image/jpeg"
          width={350}
        />) : (
        <img src={this.state.img} alt="captured images"/>
        )}
        <button onClick={this.capture} className="button is-primary">ให้อาหาร</button>
      </div>
    )
  }
}
