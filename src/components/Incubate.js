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

  componentWillUnmount() {
    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
    if ("vibrate" in navigator) {
      console.log("vibration API supported")
      navigator.vibrate([500, 300, 100]);
    } else {
      console.log("vibration API not supported")
    }
  }

  render() {
    let monster = this.props.monster.egg;
    let listOfFood = monster.food.map((food) => {
      return (<li key={food.name}>- {food.desc} {food.require} อัน</li>) ;
    })

    return (
      <div className="incubate-wrapper container has-text-centered column">
        <SceneSwiter accessScene="sceneIncubate" />
        <div className="incubate-box">
          <div className="incubate-content">
            { this.props.flashMessage ? (
              <div className="incubate-egg-flash box">
                { this.props.flashMessage }
              </div>
            ) : ('') }
          </div>
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
            <div>
              {
                this.props.monster.currentState === 'egg' ? (
                  <Link to='/sceneFeed' className="button is-primary">ให้อาหาร</Link>
                ) : (
                  <Link to='/sceneMonster' className="button is-primary">ฟักไข่</Link>
                )
              }
            </div>
          </div>
          <div>
            <MusicPlayer name="Incubate"/>
          </div>
          <div>
            <button onClick={this.share} className="loginBtn loginBtn--facebook">Share</button>
          </div>
        </div>
        <div className="incubate-footer"/>
      </div>
    )
  }
}

export default Incubate
