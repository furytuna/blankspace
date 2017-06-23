import React from 'react'
import ReactDOM from 'react-dom'
import Prologue from './Prologue'
import Register from './Register'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Prologue}/>
      <Route path="/register" component={Register}/>
    </div>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'))