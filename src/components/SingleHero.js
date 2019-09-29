import React from "react"

function HeroCards(props) {
  return (
    <div className="col-xl-12 mb-3 about--hero">
      <div className="col-xl-6 about--hero--img">
        <img src={`${props.img_hero.path}.${props.img_hero.extension}`} className="card--img--single" alt="..."/>
      </div>
        <div className="col-xl-6 about--hero--infos">
          <h3 className="about--hero--name"> {props.name}</h3>
            { (function() {
              if (props.description.length === 0) {
                return <p className="card-text-not-available">No description available.</p>
              } else {
                return <p className="card-text">{props.description}</p>
              }
            }) ()
            }
          <div className="about--hero--comics mt-4">
            <h3>Comics:</h3>
            {
              props.comics.items.map((item, index) => {
                return (
                  <li key={index}>
                    <i className="fa fa-book mr-2"></i>
                    {props.comics.items[index].name}
                  </li>
                )
              })
            }
          </div>
      </div>
    </div>
  )
}

export default HeroCards