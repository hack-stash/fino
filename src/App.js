import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header/index";

import Home from "./pages/Home/index";
import BusinessPlan from "./pages/BusinessPlanCreating/index"
import CreditServices from "./pages/CreditServices/index"
import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.scss'
import 'antd/dist/antd.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/business-plan" component={BusinessPlan} />
        <Route exact path="/credit-services" component={CreditServices} />
      </div>
    </Router>
  );
}

export default App;
