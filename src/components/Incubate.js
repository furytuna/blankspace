import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Eggs from '../config/eggsConfig'

class Incubate extends Component {
  render() {
    let monster = Eggs.Ninja.egg;
    let listOfFood = monster.food.map((food) => {
      return (<li>- {food.desc} {food.require} อัน</li>) ;
    });

    return (
      <div className="incubate-wrapper container has-text-centered column">
        <div className="incubate-box">
          <div className="incubate-bg" />
          <div className="incubate-content">
            <div className="incubate-egg">
              <img src={monster.src} />
            </div>
            <div className="incubate-detail box">
              <h1 className="title is-4"><b>{monster.name}</b></h1>
              <h1><b>รายการอาหาร</b></h1>
              <ul className="has-text-left">
                { listOfFood }
              </ul>
            </div>
          </div>
        </div>
        <Link to='/sceneFeed' className="button is-primary">ให้อาหาร</Link>
        <audio autoPlay={true}>
          <source src="../assets/audio/intro.mp3" type="audio/mpeg" />
        </audio>
      </div>
    )
  }
}

export default Incubate
