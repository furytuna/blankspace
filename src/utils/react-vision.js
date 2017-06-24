import vision from 'react-cloud-vision-api'
import { key } from '../config/visionConfig'

class ImageAnalysis {
  static analystImage(image) {
    vision.init(key)

    const req = new vision.Request({
      image: new vision.Image({
        base64: image,
      }),
      features: [
        new vision.Feature('LABEL_DETECTION', 10),
      ]
    })

    const result = vision.annotate(req).then((res) => {
      return JSON.stringify(res.responses)
    }, (e) => {
      console.log('Error: ', e)
    })

    return result
  }

  static getDataFromImage(base64Img) {
    return this.analystImage(base64Img);
  }
}

export default ImageAnalysis
