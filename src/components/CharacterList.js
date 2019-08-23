import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import { Container } from 'semantic-ui-react'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);
 
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
       axios
        .get(`https://rickandmortyapi.com/api/character/`)
        .then(response => {
          setCharacter(response.data.results);
          console.log(response.data.results);
        })
        .catch(error => {
          console.error(error);
        });

  },[]);

  return (
    <section className="character-list grid-view">
      <Container className="container">
          {character.map(id => (   
            <div className="cardStyle">
            <CharacterCard
              key={id}
              image={id.image}
              name={id.name}
              species={id.species}
              status={id.status}
              location={id.location.name}
              origin={id.origin.name}
            />
            </div>
            ))}
      </Container>
    </section>
  );
}