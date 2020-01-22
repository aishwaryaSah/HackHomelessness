import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import Home from "./component/home";
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from "./component/aboutus";
import Contact from "./component/contact";
import * as serviceWorker from './serviceWorker';
import TopNavBar from "./component/topnavbar";

const routing = (
  <Router>
    <TopNavBar></TopNavBar>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/aboutus" component={AboutUs} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
)


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();