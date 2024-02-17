import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Home from './views/home'
import Contact from './views/contact'
import About from './views/about'
import Donation from './views/donation'
import NotFound from './views/not-found'
import Header from './components/headernew'
import Footer from './components/footer'

const App = () => {
  return (
    <Router>
    <Header/>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Contact} exact path="/contact" />
        <Route component={About} exact path="/about" />
        <Route component={Donation} exact path="/donation" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
      <Footer/>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
