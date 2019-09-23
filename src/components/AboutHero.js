import React, {useEffect, useState} from "react";

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

  return (
    <div>
      {state.characters === null ? "loading" : state.characters[0].name}
    </div>
  );
};

export default AboutHero;