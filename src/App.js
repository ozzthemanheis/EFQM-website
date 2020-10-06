import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import WhoWeAre from './components/pages/who-we-are';
import whatWeDo from './components/pages/what-we-do';
import Model from './components/pages/Model';
import ContactUs from './components/pages/Contact-us';
import FAQS from './components/pages/FAQS';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/who-we-are' component={WhoWeAre} />
          <Route path='/what-we-do' component={whatWeDo} />
          <Route path='/Model' component={Model} />
          <Route path='/Contact-us' component={ContactUs} />
          <Route path='/FAQS' component={FAQS} />
     
        </Switch>
      </Router>
    </>
  );
}

export default App;