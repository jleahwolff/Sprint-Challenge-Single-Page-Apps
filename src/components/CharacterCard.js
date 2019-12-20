import React from "react";

const CharacterCard = props => {
  return (
  <div className="character-card">
    <h2>{props.name}</h2>
    <div className="character-species">
      Species: <em>{props.species}</em>
    </div>
  </div>
  
    )
}

export default CharacterCard;
