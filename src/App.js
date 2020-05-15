import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './custom-code/header';
import Footer from './custom-code/footer';

function App() {
  document.title = "Currency Exchange";
  return (
    <div className="App">
      <Header />
      
      <Footer />
    </div>
  );
}

export default App;
