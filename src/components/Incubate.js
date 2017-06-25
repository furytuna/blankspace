import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import MusicPlayer from '../containers/MusicPlayer'
import SceneSwitcher from '../containers/SceneSwitcher'


class Incubate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flashing: false,
      goToMonster: false,
      eggShakingClass: ''
    }
  }
  componentWillUnmount() {
    if (this.props.monster.currentState === 'egg') {
      this.props.setCurrentScene(this.props.uid, 'sceneFeed')
    }
  }
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

  goToMonster = () => {
    this.setState({
      flashing: true,
      eggShakingClass: 'shaking-egg'
    })
    navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
    if ("vibrate" in navigator) {
      console.log("vibration API supported")
      navigator.vibrate([500, 300, 100]);
    } else {
      console.log("vibration API not supported")
    }
    setTimeout(() => {
      this.props.setCurrentScene(this.props.uid, 'sceneMonster')
      this.setState({
        goToMonster: true
      })
    }, 1900);
  }

  render() {
    let monster = (this.props.monster) ? this.props.monster.egg : { food: []}
    let eggImageClass = `incubate-egg ${this.state.eggShakingClass}`
    let listOfFood = monster.food.map((food) => {
      return (<li key={food.name}>- {food.desc} {food.require} อัน</li>) ;
    })

    return (
      <div className="incubate-wrapper container has-text-centered column">
        <SceneSwitcher accessScene="sceneIncubate" />
        <div className="incubate-box">
          <div className="incubate-content">
            { this.props.flashMessage ? (
              <div className="incubate-egg-flash box">
                { this.props.flashMessage }
              </div>
            ) : ('') }
          </div>
          <div className="incubate-content">
            <div className={eggImageClass}>
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
              { this.props.monster.currentState === 'egg' ? (
                <Link to='/sceneFeed' className="button is-primary">ให้อาหาร</Link>
              ) : (
                <button onClick={this.goToMonster} className="button is-primary">ฟักไข่</button>
              ) }

              { this.state.goToMonster ? (
                <Redirect to='/sceneMonster' className="button is-primary" />
              ) : ('') }
            </div>
          </div>
          <div>
            {
              this.state.flashing ? (
                <div className="flash"></div>
              ) : (
                ''
              )
            }
            <MusicPlayer name="Incubate"/>
          </div>
        </div>
        <div className="incubate-footer"/>
      </div>
    )
  }
}

export default Incubate
