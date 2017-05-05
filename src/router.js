import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Landing from './components/landing/landing.js'

export default(
   <Switch>
       <Route component={Landing} exact path='/'></Route>
   </Switch>

)
