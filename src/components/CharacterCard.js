import React from "react";

const CharacterCard = props => {
  return (
  <div className="character-card">
    <h2>{props.name}</h2>
      <p>Species: <em>{props.species}</em> </p>
  </div>
    )
}

export default CharacterCard;
