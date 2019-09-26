import React from 'react'
import {NavLink} from "react-router-dom";

function Header() {
    return (
      <header className="title">
        <div className="pt-4 header--home">
          <NavLink to="/" className="header--text">Home</NavLink>
        </div>
        <img src="https://upload.wikimedia.org/wikipedia/fr/a/a4/Logo_Marvel_Comics.jpg" alt="marvel-logo" className="logo-marvel"></img>
      </header>
    )
}

export default Header