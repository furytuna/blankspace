import React, { Component } from 'react'
import firebase from 'firebase'
import { Redirect } from 'react-router'

class Register extends Component {
  constructor(props) {
    super(props)
    this.provider = new firebase.auth.FacebookAuthProvider()
    this.state = {
      registered: false
    }
  }

  loginWithFacebook = () => {
    firebase.auth().signInWithPopup(this.provider).then((result) => {
      var token = result.credential.accessToken
      this.props.setProfile(result.user.providerData[0])
      this.setState({
        registered: true
      })
    })
  }

  // logOut = () => {
  //   firebase.auth().signOut().then(() => {
  //     this.setState({ user: { displayName: 'Hero'}})
  //   })
  // }

  render() {  
    return(
      <div>
        {this.state.registered ? (
          <Redirect to="/sceneRandomEgg" />
        ) : (
          <button onClick={this.loginWithFacebook} className="button is-primary">Login with Facebook</button>
        )}
      </div>
    )
  }
}

export default Register