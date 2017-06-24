import React, { Component } from 'react'
import firebase from 'firebase'

class Register extends Component {
  constructor(props) {
    super(props)
    this.provider = new firebase.auth.FacebookAuthProvider()
  }

  loginWithFacebook = () => {
    firebase.auth().signInWithPopup(this.provider).then((result) => {
      console.log('Provider', result.user.providerData[0])
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
        <button className="loginBtn loginBtn--facebook" onClick={this.loginWithFacebook}>Login with Facebook</button>
        {/*<button onClick={this.logOut}>Log Out</button>*/}
      </div>
    )
  }
}

export default Register
