import React from "react"
import HeroCards from "./HeroCards"
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import AboutHero from "./AboutHero";

class Characters extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      characters: null,
      showList: {
        list: true,
        searchInput: ""
      }
    }
  }

  componentDidMount() {
    const url = "https://gateway.marvel.com/"
    const apiKey = "f5d9657d8bb68f805b1ec30fe13cf70d"

    fetch(`${url}v1/public/characters?apikey=${apiKey}&limit=40`)
      .then(response => response.json())
      .then(data => {
        this.setState({
        characters: data.data.results
      })
    })
  }

  handleOnChange = (event) => {
    if (event.target.value.length !== "") {
      this.setState({
        showList: {
          list: false,
          searchInput: event.target.value
        }
      })
    } else {
      this.setState({
        showList: {
          list: true,
          searchInput: ""
        }
      })
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="search--bar">
          <input
          className="form-control search--bar--input"
          type="text"
          placeholder="Search"
          aria-label="Search"
          onChange={e => this.handleOnChange(e) }
          />
        </div>
        <div className="row">
          { (function() {
            if(this.state.characters === null) {
              return "loading..."
            }
            if(this.state.characters !== null) {
              if (this.state.showList.list) {
                return this.state.characters.map(character => {
                  return <HeroCards name={character.name} id={character.id} description={character.description} img_hero={character.thumbnail} key={character.name} />
                })
              }
              if (!this.state.showList.list) {
                return this.state.characters.map(character => {
                  return character.name.includes(this.state.showList.searchInput) ? <HeroCards name={character.name} id={character.id} description={character.description} img_hero={character.thumbnail} key={character.name} /> : null
                })
              }
            }
          }).bind(this) ()
          }
        </div>
      </React.Fragment>
    )}
}

export default Characters
