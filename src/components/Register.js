import React, { Component } from 'react'
import firebase from 'firebase'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'

class Register extends Component {
  constructor(props) {
    super(props)
    this.provider = new firebase.auth.FacebookAuthProvider()
  }

  loginWithFacebook = () => {
    firebase.auth().signInWithPopup(this.provider).then((result) => {
      this.props.setProfile(result.user.providerData[0])
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
        {this.props.profile.uid ?
        (<Link to={this.props.currentScene} className="button is-primary">เล่นต่อ</Link>) :
        (<button onClick={this.loginWithFacebook} className="loginBtn loginBtn--facebook">Login with Facebook</button>)
        }
      </div>
    )
  }
}

export default Register
