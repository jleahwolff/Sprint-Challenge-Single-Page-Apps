import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage"
import CharacterList from "./components/CharacterList"
import CharacterCard from "./components/CharacterCard"


export default function App() {

  return (
    <main>
      <Header />
      <nav>
      <div className="nav-links">
        <Link to="/">Welcome</Link>
        <Link to="/character-list">Character List</Link>
      </div>
      </nav>
        <CharacterList></CharacterList>
        <CharacterCard></CharacterCard>
      
    </main>
  );
}
