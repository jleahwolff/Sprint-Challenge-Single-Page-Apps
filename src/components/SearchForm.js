import React, { useState } from "react";

export default function SearchForm(props) {
  
  const [results, setResults] = useState();

  const handleChanges = e => {
    setResults(e.target.value);
  };

const submitHandler = e => {
  e.preventDefault();


const filter = props.character.filter(character => {
  return character.name.indexOf(results) !== -1;
});

props.search(filter)
}

  return (
    <section>
      <form onSubmit={submitHandler}>
        <input 
        onChange={handleChanges}
        type='text'
        name='character'
        id='character'
        placeholder=' Search for your favorite character...'
        />
        <button type="submit">Submit!</button>
      </form>
    </section>
  )
}
