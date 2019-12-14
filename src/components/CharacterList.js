import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import  CharacterCard  from './CharacterCard';
import SearchForm from './SearchForm';

export default function CharacterList() {
  const [charArr, setCharArr] = useState([]);

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        console.log(res.data.results);
        setCharArr(res.data.results);
      })
      .catch(error => console.log(error))
  }, []);

  return (
    <section className="character-list">
      <div className='link-container'>
        <Link to='/'>Home</Link>
        <Link className='characters-link' to='/locations'>List of Locations</Link>
        <Link className='characters-link' to='/episodes'>List of Episodes</Link>
        <SearchForm characters={charArr}/>
      </div>
      <div className='card-container'>
        {charArr.map(charObj => {
          return <CharacterCard character={charObj} key={charObj.id} />
        })}
      </div>
    </section>
  );
}
