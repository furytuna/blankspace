import React, { Component } from 'react'
import firebase from 'firebase'
import reactfire from 'reactfire'

export default class Register extends Component {
  constructor(props) {
    super(props)
    this.provider = new firebase.auth.FacebookAuthProvider()
    this.state = {user: { displayName: 'Hero'}}
  }

  loginWithFacebook = () => {  
    firebase.auth().signInWithPopup(this.provider).then((result) => {
      var token = result.credential.accessToken
      this.setState({ user: result.user })
    })
  }

  logOut = () => {
    firebase.auth().signOut().then(() => {
      this.setState({ user: null })
    })
  }

  render() {  
    const user = this.state.user
    console.log(this.state)
    return(
      <div>
        <p>Hi, {user.displayName}!</p>
        <button onClick={this.loginWithFacebook.bind(this)}>Login with Facebook</button><button onClick={this.logOut.bind(this)}>Log Out</button>
      </div>
    )
  }
}