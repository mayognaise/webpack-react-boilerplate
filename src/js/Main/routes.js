import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './App'
import Intro from './Intro'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Intro} />
      <Route path="some-path" component={Intro} />
    </Route>
  </Router>
), document.getElementById('react-root'))