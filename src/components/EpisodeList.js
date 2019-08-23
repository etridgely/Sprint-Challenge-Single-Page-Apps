import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";
import { Container } from 'semantic-ui-react'

export default function EpisodeList() {
  // TODO: Add useState to track data from useEffect
  const [episode, setEpisode] = useState([]);
 
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
       axios
        .get(`https://rickandmortyapi.com/api/episode/`)
        .then(response => {
          setEpisode(response.data.results);
        })
        .catch(error => {
          console.error(error);
        });

  },[]);

  return (
    <section className="episode-list grid-view">
      <Container className="container">
            {episode.map(id => (
                <div className="cardStyle">
                <EpisodeCard
                key={id}
                name={id.name}
                air_date={id.air_date}
                episode={id.episode}
                />
                </div>
                ))}
      </Container>
    </section>
  );
}