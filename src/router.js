import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

export default(
   <Switch>
       <Route component={()=>(<h1>its commin on</h1>)} exact path='/'></Route>
   </Switch>

)
