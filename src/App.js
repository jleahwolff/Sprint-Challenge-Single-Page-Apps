import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList"
import CharacterCard from "./components/CharacterCard"


export default function App() {
  return (
    <main>
      <Header />
        <CharacterList></CharacterList>
        <CharacterCard></CharacterCard>
      
    </main>
  );
}
