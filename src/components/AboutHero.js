import React, {useEffect, useState} from "react";
import SingleHero from './SingleHero';

const AboutHero = props => {
  const [state, setState] = useState({
    characters: null
  });

  useEffect(() => {
    const url = "https://gateway.marvel.com/"
    const apiKey = "f5d9657d8bb68f805b1ec30fe13cf70d"

    fetch(`${url}v1/public/characters/${props.match.params.id}?apikey=${apiKey}`)
      .then(response => response.json())
      .then(data => setState({characters: data.data.results}))
    }, []);
    console.log(state);

  return (
    <div>
      {state.characters === null ?
        "loading" :
        < SingleHero
          name={state.characters[0].name}
          id={state.characters[0].id}
          description={state.characters[0].description}
          img_hero={state.characters[0].thumbnail}
          comics={state.characters[0].comics}
          key={state.characters[0].id}
        />
      }
    </div>
  );
};

export default AboutHero;