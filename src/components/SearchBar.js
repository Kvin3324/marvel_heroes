import React from "react"

function SearchBar() {
    return (
      <div className="search--bar">
        <input className="form-control search--bar--input" type="text" placeholder="Search" aria-label="Search"/>
      </div>
    )
}

export default SearchBar