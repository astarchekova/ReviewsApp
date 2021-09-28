import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MenuLocation from "./components/Menu/MenuLocation";
import MenuForms from "./components/Menu/MenuForms";
import MenuFeedbacks from "./components/Menu/MenuFeedbacks";
import MenuAnalytics from './components/Menu/MenuAnalytics';


export enum ERouterLinks {
  home = "/",
  forms = "/Forms",
  feedbacks = "/Feedbacks",
  analytics = "/Analytics",
}



function App() {
  return (
    <Router>
      <Switch>
        <Route path={ERouterLinks.home} exact component={MenuLocation} />
        <Route path={ERouterLinks.forms} exact component={MenuForms} />
        <Route path={ERouterLinks.feedbacks} exact component={MenuFeedbacks} />
        <Route path={ERouterLinks.analytics} exact component={MenuAnalytics} />

      </Switch>
    </Router>
  );

}


export default App;
