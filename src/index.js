import React from 'react'
import ReactDOM from 'react-dom'
import Prologue from './Prologue'
import Register from './Register'
import firebase from 'firebase'
import reactfire from 'reactfire'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

var config = {
  apiKey: "AIzaSyCTk3XG7Zm_AsSlCxVbiS43kF3DAxMXmoY",
  authDomain: "blankspace-3ffc8.firebaseapp.com",
  databaseURL: "https://blankspace-3ffc8.firebaseio.com",
  projectId: "blankspace-3ffc8",
  storageBucket: "blankspace-3ffc8.appspot.com",
  messagingSenderId: "395836399507"
};
firebase.initializeApp(config);

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Prologue}/>
      <Route path="/register" component={Register}/>
    </div>
  </Router>
)

ReactDOM.render(<App firstName="Lattapon" />, document.getElementById('root'))