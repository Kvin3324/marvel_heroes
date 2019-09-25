import React from "react"
import {Link} from "react-router-dom";

function HeroCards(props) {
  return (
    <div className="col-xl-4">
      <div className="card">
        <img src={`${props.img_hero.path}.${props.img_hero.extension}`} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title"> {props.name}</h5>
          <p>(#{props.id})</p>
          <p className="card-text">{props.description}</p>
          <button className="btn btn-secondary">
            <Link to={`/about/${props.id}`} className="link--to--go">Goooo</Link>
          </button>
        </div>
      </div>
    </div>
    )
}

export default HeroCards