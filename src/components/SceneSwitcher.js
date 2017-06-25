import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class SceneSwitcher extends Component {
  constructor(props) {
    super(props)
    this.state = {
      willRedirect: false
    }
  }

  componentWillMount() {
    if (!(this.props.accessScene === this.props.currentScene)) {
      this.setState({ willRedirect: true })
    }
  }

  render() {
    return (
      <div>
        {this.state.willRedirect && <Redirect to={`/${this.props.currentScene}`} />}
      </div>
    )
  }
}

export default SceneSwitcher
