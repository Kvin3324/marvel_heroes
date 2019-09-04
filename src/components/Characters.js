import React from "react"
import HeroCards from "./HeroCards"

class Characters extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      characters: null
    }
  }

  componentDidMount() {
    const url = "https://gateway.marvel.com/"
    const apiKey = "f5d9657d8bb68f805b1ec30fe13cf70d"

    fetch(`${url}v1/public/characters?apikey=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        console.log(data.data.results);
        this.setState({
        characters: data.data.results
      })
    })
    }

  render() {
    return (
      <div className="row">
        {this.state.characters === null ?
          "loading...":
          this.state.characters.map(character => {
            return <HeroCards name={character.name} description={character.description} img_hero={character.thumbnail}  />
          })
      }
      </div>
    )}
}

export default Characters

