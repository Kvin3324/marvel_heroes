import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Introduction from "./components/Introduction"
import Characters from "./components/Characters"
import AboutHero from "./components/AboutHero"
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="container App">
        <NavLink to="/">Home</NavLink>
        <Header/>
        <Route exact path="/" component={Introduction}/>
        <Route exact path="/" component={Characters}/>
        <Route exact path="/about/:id" component={AboutHero}/>
          {/* <Header />
          <Introduction />
          <Characters /> */}
      </div>
    </HashRouter>
  );
}

export default App;
