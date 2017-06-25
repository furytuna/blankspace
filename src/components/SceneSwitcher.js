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
    console.log('Access scene', this.props.accessScene)
    console.log('Current scene', this.props.currentScene)
    return (
      <div>
        {this.state.willRedirect && <Redirect to={`/${this.props.currentScene}`} />}
        Scene switcher component
      </div>
    )
  }
}

export default SceneSwitcher