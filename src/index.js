import React from 'react'
import ReactDOM from 'react-dom'
import Prologue from './components/Prologue'
import RandomEgg from './containers/RandomEgg'
import Incubate from './containers/Incubate'
import Feed from './containers/Feed'
import Monster from './containers/Monster'
import firebase from 'firebase'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

import 'bulma/css/bulma.css'
import './assets/css/stylesheet.css'
import Login from './utils/login'

import registerServiceWorker from './registerServiceWorker'

var config = {
  apiKey: "AIzaSyCTk3XG7Zm_AsSlCxVbiS43kF3DAxMXmoY",
  authDomain: "blankspace-3ffc8.firebaseapp.com",
  databaseURL: "https://blankspace-3ffc8.firebaseio.com",
  projectId: "blankspace-3ffc8",
  storageBucket: "blankspace-3ffc8.appspot.com",
  messagingSenderId: "395836399507"
};
firebase.initializeApp(config);

let localData = Login.getLocalData()

function startApp(baseData) {
    const store = createStore(rootReducer, baseData, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

    const App = () => (
      <Provider store={store}>
        <Router>
          <div className="container is-fluid">
            <Route exact path="/" component={Prologue} />
            <Route exact path="/sceneRandomEgg" component={RandomEgg} />
            <Route exact path="/sceneIncubate" component={Incubate} />
            <Route exact path="/sceneFeed" component={Feed} />
            <Route exact path="/sceneMonster" component={Monster} />
          </div>
        </Router>
      </Provider>
    )

    ReactDOM.render(<App />, document.getElementById('root'))
    registerServiceWorker()
}


if (localData.profile.uid) {
  firebase.database().ref('users/' + localData.profile.uid).once('value').then((snapshot) => {
    let firebaseData = snapshot.val()
    console.log('Firebase data', firebaseData)
    startApp(firebaseData)
  })
} else {
  console.log('Local data')
  startApp(localData)
}
