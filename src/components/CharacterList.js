import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard";


const CharacterList = props => {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  const getCharacters = () => {
    axios 
    .get (`https://rickandmortyapi.com/api/character/`)
    .then (res => {
      setCharacters(res.data)
    })
    .catch (error => {
      console.log('Theres an error in the API call in Character List', error)
    });
  }

  getCharacters();
  }, []);

  return (
    <section className="character-list">
      {characters.map(character => (
        <CharacterList key={character.id} character={character} />
      ))}
    </section>
  );
}

function CharacterDetails({ character }) {
  const { id, name, species } = character;

  return (
    <div>
      <Link to = {`/characters/results/${id}`}>
        <CharacterCard
          name={name}
          species={species}>
        </CharacterCard>
      </Link>
    </div>
  );
}

export default CharacterList;
