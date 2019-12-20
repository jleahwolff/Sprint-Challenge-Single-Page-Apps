import React, { useState } from "react";
import styles from 'styled-components';

const Button=styles.button`
padding: 1rem;
`

const Input=styles.input`
padding:1rem;
`

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
        <Input 
        onChange={handleChanges}
        type='text'
        name='character'
        id='character'
        placeholder=' Search...'
        />
        <Button type="submit">Submit!</Button>
      </form>
    </section>
  )
}
