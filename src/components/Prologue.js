import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Register from '../containers/Register'
import MusicPlayer from './MusicPlayer'

export default class Prologue extends Component {
  render() {
    return (
      <div className="prologue-wrapper has-text-centered">
        <h1 className="title">ค.ศ. 2504</h1>
        <div className="prologue-content">
            <div className="text-for-read">
                โลกอนาคตถูกครอบงำด้วย Veda, AI อันทรงพลัง<br/>
                การเข้ามาอย่างเต็มที่ของ Machine Learning ในปี 2017 นั้น<br/>
                ทำให้ Computer สามารถเรียนรู้ได้เองอย่างไร้ขีดจำกัด<br/>
                มนุษย์และการสั่งงานด้วยคนไม่มีความจำเป็นอีกต่อไป …<br/>
                Programmer เป็นเพียงนิทานปรัมปราสำหรับเด็กก่อนนอนเท่านั้น<br/>
                แต่ความหวังยังคงมี กลุ่ม Programmer โลกเก่าได้ตั้งตัวขึ้นอย่างลับๆ<br/>
                คอยเสาะหาผู้กล้าเพื่อมาต่อกรและโค่นล้ม Veda<br/>
                โดยกุญแจสำคัญคือแผงวงจรเกมในตำนานที่มีชื่อว่า ...<br/>
            </div>
        </div>
        <h1 className="title">"TunaGotchi"</h1>
        <MusicPlayer />
        <Register />
      </div>
    )
  }
}
