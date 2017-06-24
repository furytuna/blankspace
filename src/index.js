import React from 'react'
import ReactDOM from 'react-dom'
import Prologue from './components/Prologue'
import RandomEgg from './components/RandomEgg'
import Incubate from './containers/Incubate'
import Feed from './components/Feed'
import MusicControl from './components/MusicControl'
import firebase from 'firebase'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

import 'bulma/css/bulma.css'
import styles from './assets/css/stylesheet.css'
import Login from './utils/login'

import registerServiceWorker from './registerServiceWorker'

let localData = Login.getLocalData() || { profile: {} }
let login = Login.isLoggedIn()

const store = createStore(rootReducer, localData, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

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
  <Provider store={store}>
    <Router>
      <div className="container is-fluid">
        <Route exact path="/" component={Prologue}/>
        <Route exact path="/sceneRandomEgg" component={RandomEgg}/>
        <Route exact path="/sceneIncubate" component={Incubate}/>
        <Route exact path="/sceneFeed" component={Feed}/>
        <Route exact path="/music" component={MusicControl}/>
      </div>
    </Router>
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()