import React from 'react'
import {NavLink} from "react-router-dom";

function Header() {
    return (
      <header className="title">
        <div className="d-flex ml-3 pt-3 header--home">
          <NavLink to="/">Home</NavLink>
        </div>
        Marvel Characters
      </header>
    )
}

export default Header