import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import  EpisodeCard  from './EpisodeCard';
import SearchForm from './SearchForm';

export default function EpisodeList() {
  const [epArr, setEpArr] = useState([]);

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/episode/')
      .then(res => {
        console.log(res);
        setEpArr(res.data.results);
      })
      .catch(error => console.log(error))
  }, []);

   return (
      <section className="character-list">
         <div className='link-container'>
            <Link to='/'>Home</Link>
            <Link className='characters-link' to='/locations'>List of Locations</Link>
            <Link className='characters-link' to='/characters'>List of Characters</Link>
            {/* <SearchForm characters={charArr}/> */}
         </div>
         <div className='card-container'>
            {epArr.map(epObj => {
               return <EpisodeCard episode={epObj} key={epObj.id} />
            })}
         </div>
      </section>
   );
}