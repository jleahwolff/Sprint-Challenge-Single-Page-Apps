import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import SearchForm from "./components/SearchForm"
import styles from 'styled-components';


export default function App() {

  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage}/>
      <Route path="/characters" component={CharacterList}/>
    </main>
  );
}
