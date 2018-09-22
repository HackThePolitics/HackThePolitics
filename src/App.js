import React, { Component } from 'react';
import { compose } from 'redux';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Headers';
import Home from './views/Home';
import PostalCode from './views/PostalCode';
import Problem from './views/Problem';
import Test from './views/Test';
import FirebaseTest from './views/FirebaseTest';
import { firestoreConnect } from 'react-redux-firebase';
import Problem from "./views/Problem";
import SolutionsToTheProblem from "./views/SolutionsToTheProblem";

import firebaseConfig from './config/firebase';

class App extends Component {
  render() {
    if (!firebaseConfig) {
      return <h1>Please config firebase under config/firebase.js</h1>;
    }

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/problems/:problemId/solutions" component={Solutions} /> */}
          <Route path="/problem" component={Problem} />
          <Route path="/postal" component={PostalCode} />
          <Route path="/test" component={Test} />
          <Route path="/firebase-test" component={FirebaseTest} />
        </Switch>
      </div>
    );
  }
}

export default compose(firestoreConnect(['problems', 'solutions']))(App);
