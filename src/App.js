import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './custom-code/header';
import Footer from './custom-code/footer';
import MainContent from './custom-code/main-content';

function App() {
  document.title = "Currency Exchange";
  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
