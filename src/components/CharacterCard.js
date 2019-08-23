import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CharacterCard = (props) => {
  const [character, setCharacter] = useState();
 
  useEffect(() => {
    const id = props.match.params.id;

       axios
        .get(`https://rickandmortyapi.com/documentation/#get-all-characters/${id}`)
        .then(response => {
          setCharacter(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[]);

  const { name, status, species, origin, location } = character;
  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <div className="save-button">Save</div>
    </div>

    //tab card
    <div class="character card">
      <div class="image">
        <img src="/images/avatar2/large/kristy.png">
      </div>
      <div class="content">
        <a class="name">{name}</a>
        <div class="meta">
          <span class="date">Joined in 2013</span>
        </div>
        <div class="description">
          Kristy is an art director living in New York.
        </div>
      </div>
      <div class="extra content">
        <a>
          <i class="user icon"></i>
          22 Friends
        </a>
      </div>
    </div>
  );
}

export default CharacterCard;