import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Introduction from "./components/Introduction"
import SearchBar from "./components/SearchBar"
import Characters from "./components/Characters"

function App() {
  return (
    <div className="container App">
      <Header />
      <Introduction />
      <SearchBar />
      <Characters />
    </div>
  );
}

export default App;
