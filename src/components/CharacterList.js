import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard";
import SearchForm from './SearchForm';


export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])
  const [filterData, updateData] = useState([])

  // TODO: Add API Request here - must run in `useEffect`
  //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  const search = allcharacters => {
    updateData(allcharacters)
  }
  
  useEffect(() => {
    const getCharacters = () => {
    axios 
    .get (`https://rickandmortyapi.com/api/character/`)
    .then (res => {
      setCharacters(res.data.results)
      updateData(res.data.results)
    })
    .catch (error => {
      console.log('Theres an error in the API call in Character List', error)
    });
  }

  getCharacters();
  }, []);

  return (
    <section className="character-list">
      <Link className='links' to={'/'}>Welcome</Link>
      <SearchForm search={search} character={characters}/>
      {filterData.map(character => (
        <CharacterCard 
        key={character.id}
        name={character.name}
        species={character.species}
        />
      ))}
      
    </section>
  );
}

// function CharacterDetails({ character }) {
//   const { id, name, species } = character;

//   return (
//     <div>
//       <Link to = {`/characters/${id}`}>
//         <CharacterCard
//           name={name}
//           species={species}>
//         </CharacterCard>
//       </Link>
//     </div>
//   );
// }