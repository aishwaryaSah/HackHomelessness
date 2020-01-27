import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import Home from "./component/home";
import '../client/node_modules/bootstrap/dist/css/bootstrap.min.css';
import AboutUs from "./component/aboutus";
import Contact from "./component/contact";
import RegisterProperty from "./component/registerProperty";
import SupportUs from "./component/supportus";
import Login from "./component/login";
import Faq from "./component/faq";
import * as serviceWorker from './serviceWorker';
import TopNavBar from "./component/topnavbar";

const routing = (
  <Router>
    <TopNavBar></TopNavBar>
    <div className="mainArea">
      <Route exact path="/" component={Home} />
      <Route path="/aboutus" component={AboutUs} />
      <Route path="/supportus" component={SupportUs} />
      <Route path="/registerProperty" component={RegisterProperty} />
      <Route path="/login" component={Login} />
      <Route path="/faq" component={Faq} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
)


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
