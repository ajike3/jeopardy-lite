import React from 'react';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Welcome from "./components/Welcome.js";
import NoMatch from "./components/NoMatch.js";
import Navigation from "./components/Navigation.js";
import Clock from "./components/Clock.js";
import Contacts from "./components/Contacts.js";
import Jeopardy from './components/jeopardy/jeopardy.js';


function App() {
  return (
    <Router>
      <div className="Container"></div>
      <Navigation />
      <Switch>
        <Route path="/welcome/:name" component={Welcome}/>
        <Route path="/contacts" component={Contacts}/>
        <Route path="/clock" component={Clock}/>
        <Route path="/jeopardy" component={Jeopardy}/>
        <Route path="/:name" component={Welcome}/>
        <Route component={NoMatch}/>
      </Switch>
    </Router>
  );
}

export default App;
