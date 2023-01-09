import React from 'react'
import Signup from './Components/Signup'
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import Forgot from './Components/Forgot'
import Home from './Components/Home'
import Login from './Components/Login'

function App() {
  return (
  <Router>
    <div>
      <Switch>
        <Route exact path="/"><Login/></Route>
        <Route exact path="/forgot"><Forgot/></Route>
        <Route exact path="/signup"><Signup/></Route>
        <Route exact path="/home"><Home/></Route>
      </Switch>
    </div>
  </Router>
  )
}

export default App
