import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Feed extends Component {
  render() {
    return (
      <div>
        <h1>Feed</h1>
        <img id="frame" />
        <button className="button is-primary">ให้อาหาร</button>
      </div>
    )
  }
}