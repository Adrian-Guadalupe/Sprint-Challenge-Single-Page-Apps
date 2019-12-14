import React from "react";
import Header from "./components/Header.js";
import { Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import SearchForm from './components/SearchForm';
import LocationList from './components/LocationsList.js';
import EpisodeList from './components/EpisodeList';


export default function App() {
  return (
    <main>
      <Header />
      <Route exact path='/' component={WelcomePage} />
      <Route exact path='/characters' component={CharacterList} />
      <Route path='/characters/search' component={SearchForm} />
      <Route path='/locations' component={LocationList} />
      <Route path='/episodes' component={EpisodeList} />
    </main>
  );
}