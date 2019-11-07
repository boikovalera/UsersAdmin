import React from 'react'
import Home from './Home'
import About from './About'
import Albums from './albums/Albums'
import Users from './users/Users'
import Header from './Header'
import {Switch, Route, BrowserRouter as Router } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div>
        <Header></Header>
        <Switch>                    
          <Route path='/about' component={About} />
          <Route path='/albums' component={Albums} />
          <Route path='/users' component={Users} />
          <Route path='/' component={Home} />
        </Switch>
      </div>
    </Router>
  )
}