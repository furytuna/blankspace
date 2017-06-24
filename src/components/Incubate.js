import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
        <img src="http://via.placeholder.com/250x300" />
        <h1>Monster Name</h1>
        <p>คำอธิบาย Monster</p>
        <h2>รายการอาหาร</h2>
        <ul>
          <li>หญ้า 2 กอง</li>
          <li>ปลา 3 ตัว</li>
          <li>น้ำ 1 แก้ว</li>
        </ul>
        <Link to='/sceneFeed' className="button is-primary">ให้อาหาร</Link>
        {/*<input className="button is-primary" type="file" accept="image/*" capture="camera" id="camera" onChange={this.handleCameraOnChange} />*/}
        <audio autoPlay={true}>
          <source src="../assets/audio/intro.mp3" type="audio/mpeg" />
        </audio>
      </div>
    )
  }
}

export default Incubate
