import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Register from '../containers/Register'

export default class Prologue extends Component {
  render() {
    return (
      <div>
        <h1>Prologue</h1>
        <p>โลกอนาคตถูกครอบงำด้วย Veda, AI อันทรงพลัง การเข้ามาของ Machine Learning นั้นทำให้ Computer สามารถเรียนรู้ได้เองอย่างไร้ขีดจำกัด มนุษย์และการสั่งงานด้วยคนไม่มีความจำเป็นอีกต่อไป … Programmer เป็นเพียงนิทานปรัมปราสำหรับเด็กก่อนนอนเท่านั้น</p>
        <p>แต่ความหวังยังคงมี กลุ่ม Programmer โลกเก่าได้ตั้งตัวขึ้นอย่างลับๆ คอยเสาะหาผู้กล้าเพื่อมาต่อกรและโค่นล้ม Veda โดยกุญแจสำคัญคือแผงวงจรเกมในตำนานที่มีชื่อว่า</p> 
        <p>TunaGotchi…</p>
        <Register />
      </div>
    )
  }
}