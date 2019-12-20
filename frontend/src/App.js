import React from 'react';
import {BrowserRouter, Switch} from 'react-router-dom';
import {Route} from 'react-router';

import Home from 'sceens/home';
import Members from 'sceens/members';
import { Requests } from "sceens/requests";
import NotFound from 'sceens/notFound';

// App routes the user to the correct page.
export default function App() {
    return (
        <BrowserRouter className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/members" component={Members} />
            <Route path="/pullRequests" component={Requests} />
            <Route path="/" component={NotFound} />
          </Switch>
        </BrowserRouter>
    );
}
