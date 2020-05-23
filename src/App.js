import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Header from './custom-code/header';
import Footer from './custom-code/footer';
import MainContent from './custom-code/main-content';
import About from './custom-code/about';

function App() {
  document.title = "Currency Exchange";
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact component={MainContent} />
          <Route path="/about" component={About} />
        </Switch> 
      </Router>
      <Footer />
    </div>
  );
}

export default App;
