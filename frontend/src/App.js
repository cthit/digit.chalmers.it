import React from 'react';
import {BrowserRouter, Switch} from 'react-router-dom';
import {Route} from 'react-router';

import Home from 'page/Home.js';
import NotFound from 'page/NotFound.js';

// App routes the user to the correct page.
export default function App() {
    return (
        <BrowserRouter className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/" component={NotFound} />
          </Switch>
        </BrowserRouter>
    );
}
