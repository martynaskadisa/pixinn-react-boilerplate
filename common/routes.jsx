import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { App, Home, About, Contact, NoMatch } from 'containers'

export default (
  <Route name='app' path='/' component={App}>
    <IndexRoute name='home' component={Home} />
    <Route name='about' path='about' component={About} />
    <Route name='contact' path='contact' component={Contact} />
  </Route>
)
//{ !!window ? <Route name='no-match' path='*' component={NoMatch} /> : undefined }
