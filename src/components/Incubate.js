import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Eggs from '../config/eggsConfig'
import MusicPlayer from '../containers/MusicPlayer'

class Incubate extends Component {

  render() {
    let monster = this.props.monster.egg;
    console.log(monster)
    let listOfFood = monster.food.map((food) => {
      return (<li>- {food.desc} {food.require} อัน</li>) ;
    })

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
        <MusicPlayer name="Incubate"/>
      </div>
    )
  }
}

export default Incubate
