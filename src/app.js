import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Logo from './images/pawprint.png'


import 'bulma'
import './style.scss'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Dogs from './components/Dogs'
import SingleDog from './components/SingleDog'
import FavouriteDogs from './components/Favourites'

const App = () => (
  <BrowserRouter basename="/project-fetch">
    <Navbar logo={Logo}/>
    <Switch>
      <Route exact path="/" component={Home} logo={Logo} />
      <Route exact path="/dogs" component={Dogs} />
      <Route exact path="/dogs/favourites" component={FavouriteDogs} />
      <Route exact path="/dogs/:id" component={SingleDog} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)