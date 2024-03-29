import React from "react"
import HeroCards from "./HeroCards"
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';

class Characters extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      url: "https://gateway.marvel.com/",
      characters: null,
      showList: {
        list: true,
        searchInput: "",
      },
      currentPage: 1
    };
  }

  getList(page) {
    fetch(`${this.state.url}v1/public/characters?apikey=${process.env.REACT_APP_API_KEY_CHARACTERS}&limit=10&offset=${page * 10}`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        characters: data.data.results
      })
    })

  }

  componentDidMount() {
    this.getList(this.currentPage)
  }

  handleOnChange = (event) => {
    if (event.target.value.length !== "") {
      this.setState({
        showList: {
          list: false,
          searchInput: event.target.value,
        }
      })
    } else {
      this.setState({
        showList: {
          list: true,
          searchInput: "",
        }
      })
    }
  }

  handleOnChangePage = (page) => {
    this.getList(page)
  }

  render() {
    return (
      <React.Fragment>
      <div className="banner">
        <div className="search--bar">
          <input
          className="form-control search--bar--input"
          type="text"
          placeholder="Search your Hero"
          aria-label="Search"
          onChange={e => this.handleOnChange(e) }
          />
          <p className="search--bar--input--hint">(Don't forget: a name begins with an uppercase. <span role="img" aria-label="">😉</span>)</p>
        </div>
      </div>
        <div className="container container--cards">
          <div className="row">
            { (function() {
              if(this.state.characters === null) {
                return <i className="fa fa-spinner"></i>
              }
              if(this.state.characters !== null) {
                if (this.state.showList.list) {
                  return this.state.characters.map(character => {
                    return <HeroCards name={character.name} id={character.id} description={character.description} img_hero={character.thumbnail} key={character.name} />
                  })
                }
                if (!this.state.showList.list) {
                  return this.state.characters.map(character => {
                    return character.name.includes(this.state.showList.searchInput) ? <HeroCards name={character.name} id={character.id} description={character.description} img_hero={character.thumbnail} key={character.id} /> : null
                  })
                }
              }
            }).bind(this) ()
          }
          </div>
        </div>
        <div className="pagination">
          <Pagination onChange={page => this.getList(page)} defaultPageSize={10} total={1000} pageSize={10}  />
        </div>
      </React.Fragment>
    )}
}

export default Characters
