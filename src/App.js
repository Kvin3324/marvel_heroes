import React from 'react';
import './App.css';
import Header from "./components/Header"
import Characters from "./components/Characters"
import AboutHero from "./components/AboutHero"
import {
  Route,
  HashRouter
} from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="container App">
        <Header/>
        <Route exact path="/" component={Characters}/>
        <Route exact path="/about/:id" component={AboutHero}/>
      </div>
    </HashRouter>
  );
}

export default App;
