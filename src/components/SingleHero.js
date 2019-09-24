import React from "react"

function HeroCards(props) {
  return (
    <div className="col-xl-12 mb-3 about--hero">
      <div className="col-xl-6 about--hero--img">
        <img src={`${props.img_hero.path}.${props.img_hero.extension}`} className="card-img-top" alt="..."/>
      </div>
        <div className="col-xl-6 about--hero--infos">
          <h5 className="about--hero--name"> {props.name}</h5>
          <p className="about--hero--description">{props.description}</p>
          <strong>His comics:</strong>
          {
            props.comics.items.map((item, index) => {
              return (
              <li>
                {props.comics.items[index].name}
              </li>
              )
            })
          }
      </div>
    </div>
  )
}

export default HeroCards