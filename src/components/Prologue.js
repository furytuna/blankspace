import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Register from '../containers/Register'
// import MusicPlayer from './MusicPlayer'

export default class Prologue extends Component {
  render() {
    return (
      <div>
        <h1 className="title">ค.ศ. 2504</h1>
        <p>โลกอนาคตถูกครอบงำด้วย Veda, AI อันทรงพลัง</p>
        <p>การเข้ามาอย่างเต็มที่ของ Machine Learning ในปี 2017 นั้นทำให้ Computer สามารถเรียนรู้ได้เองอย่างไร้ขีดจำกัด</p>
        <p>มนุษย์และการสั่งงานด้วยคนไม่มีความจำเป็นอีกต่อไป … Programmer เป็นเพียงนิทานปรัมปราสำหรับเด็กก่อนนอนเท่านั้น</p>
        <p>แต่ความหวังยังคงมี กลุ่ม Programmer โลกเก่าได้ตั้งตัวขึ้นอย่างลับๆ คอยเสาะหาผู้กล้าเพื่อมาต่อกรและโค่นล้ม Veda</p>
        <p>โดยกุญแจสำคัญคือแผงวงจรเกมในตำนานที่มีชื่อว่า ...</p> 
        <h1 className="title">"TunaGotchi"</h1>
        <audio autoPlay={true}>
            <source src="../assets/audio/intro.mp3" type="audio/mpeg"/>
        </audio>
        <Register />
      </div>
    )
  }
}