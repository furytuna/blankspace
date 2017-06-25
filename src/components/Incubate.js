import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MusicPlayer from '../containers/MusicPlayer'


class Incubate extends Component {

  share() {
    if (navigator.share) {
      navigator.share({
          title: "มาดูไข่ของฉันสิ!!!",
          text: "มาดูไข่ของฉันบน Tunagotchi สิ, เราจะกู้โลกไปด้วยกัน!",
          url: window.location.href
      }).then(() => console.log('Successful share'))
      .catch(error => console.log('Error sharing:', error));
    } else {
      console.log('Navigator is not available')
    }
  }

  render() {
    let monster = this.props.monster.egg;
    let listOfFood = monster.food.map((food) => {
      return (<li key={food.name}>- {food.desc} {food.require} อัน</li>) ;
    })

    return (
      <div className="incubate-wrapper container has-text-centered column">
        <div className="incubate-box">
          <div className="incubate-bg" />
          <div className="incubate-content">
            <div className="incubate-egg">
              <img src={monster.src} alt={monster.name}/>
            </div>
            <div className="incubate-detail box">
              <h1 className="title is-4"><b>{monster.name}</b></h1>
              <h1><b>รายการอาหาร</b></h1>
              <ul className="incubate-list-food has-text-left">
                { listOfFood }
              </ul>
            </div>
          </div>
        </div>
        {this.props.flashMessage ? (
          <div>{this.props.flashMessage}</div>
        ):('')}
        <Link to="/sceneFeed" className="button is-primary">ให้อาหาร</Link>
        <MusicPlayer name="Incubate"/>
        <button onClick={this.share} className="loginBtn loginBtn--facebook">Share</button>
      </div>
    )
  }
}

export default Incubate
