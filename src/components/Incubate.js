import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Incubate extends Component {
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
        <audio autoPlay={true}>
            <source src="../assets/audio/intro.mp3" type="audio/mpeg"/>
        </audio>
      </div>
    )
  }
}