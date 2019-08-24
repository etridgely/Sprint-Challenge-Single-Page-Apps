import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";
import { Container } from 'semantic-ui-react'

export default function LocationsList() {
const [location, setLocation] = useState([]);
 
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
       axios
        .get(`https://rickandmortyapi.com/api/location/`)
        .then(response => {
          setLocation(response.data.results);
          console.log(response.data.results);
        })
        .catch(error => {
          console.error(error);
        });

  },[]);

  return (
    <section className="character-list grid-view">
      <Container className="container">
          {location.map(id => (  
            <div className="cardStyle">
            <LocationCard
            key={id} 
            name={id.name}
            type={id.type}
            dimension={id.dimension}
            residents={id.residents.length}
            />
            </div>
            ))}
      </Container>
    </section>
  );
}