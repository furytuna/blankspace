import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Register from '../containers/Register'
import MusicPlayer from '../containers/MusicPlayer'

export default class Prologue extends Component {
  render() {
    return (
      <div className="prologue-wrapper container has-text-centered column">
        <div className="prologue-box">
          <div className="prologue-bg box" />
          <div className="prologue-content">
              <h1 className="title">ค.ศ. 2504</h1>
              โลกอนาคตถูกครอบงำด้วย Veda, AI อันทรงพลัง
              การเข้ามาอย่างเต็มที่ของ Machine Learning ในปี 2017 นั้น
              ทำให้ Computer สามารถเรียนรู้ได้เองอย่างไร้ขีดจำกัด
              มนุษย์และการสั่งงานด้วยคนไม่มีความจำเป็นอีกต่อไป …
              Programmer เป็นเพียงนิทานปรัมปราสำหรับเด็กก่อนนอนเท่านั้น
              แต่ความหวังยังคงมี กลุ่ม Programmer โลกเก่าได้ตั้งตัวขึ้นอย่างลับๆ
              คอยเสาะหาผู้กล้าเพื่อมาต่อกรและโค่นล้ม Veda
              โดยกุญแจสำคัญคือแผงวงจรเกมในตำนานที่มีชื่อว่า ...
              <h1 className="title"><b>"TunaGotchi"</b></h1>
          </div>
        </div>
        <Register />
        <MusicPlayer name="Prologue"/>
      </div>
    )
  }
}
