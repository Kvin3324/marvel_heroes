import React from "react"
import {Link} from "react-router-dom";

function HeroCards(props) {
  return (
    <div className="col-xl-3 col-sm-6 mr-4">
      <div className="card">
        <div className="card--img">
          <img src={`${props.img_hero.path}.${props.img_hero.extension}`} className="card-img-list" alt="..."/>
        </div>
        <div className="card-body">
          <h5 className="card-title"> {props.name}</h5>
          <p>(#{props.id})</p>
          { (function() {
            if (props.description.length > 200) {
              return <p className="card-text">{props.description.substr(0, 50)} (...)</p>
            } else if (props.description.length === 0) {
              return <p className="card-text-not-available">No description available.</p>
            } else {
              return <p className="card-text">{props.description}</p>
            }
          }) ()
          }
          <button className="btn btn-secondary">
            <Link to={`/about/${props.id}`} className="link--to--go">More informations</Link>
          </button>
        </div>
      </div>
    </div>
    )
}

export default HeroCards