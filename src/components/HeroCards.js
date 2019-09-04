import React from "react"

function HeroCards(props) {
  console.log(props);
  return (
        <div className="col-xl-4">
          <div className="card">
            <img src={`${props.img_hero.path}.${props.img_hero.extension}`} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title"> {props.name} </h5>
              <p className="card-text">{props.description}</p>
              <button className="btn btn-primary">Go to desc</button>
            </div>
          </div>
        </div>
    )
}

export default HeroCards