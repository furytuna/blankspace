import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Eggs from '../config/eggsConfig'

export default class Incubate extends Component {
  render() {
    return (
      <div>
        <img src={Eggs.Rockman.egg.src} />
        <h1>{Eggs.Rockman.egg.name}</h1>
        <h2>รายการอาหาร</h2>
        <ul>
          {Eggs.Rockman.egg.food.map((food) => {
            console.log(food);
            return (<li>{food.desc} {food.require} อัน</li>);
          })}
        </ul>
        <audio autoPlay={true}>
            <source src="../assets/audio/intro.mp3" type="audio/mpeg"/>
        </audio>
      </div>
    )
  }
}
