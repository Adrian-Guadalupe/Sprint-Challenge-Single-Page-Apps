import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import  LocationCard  from './LocationCard';
import SearchForm from './SearchForm';

export default function LocationList() {
  const [locArr, setLocArr] = useState([]);

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/location/')
      .then(res => {
        console.log(res);
        setLocArr(res.data.results);
      })
      .catch(error => console.log(error))
  }, []);

  return (
    <section className="character-list">
      <div className='navi'>
        <Link to='/'>Home</Link>
        {/* <SearchForm location={locArr}/> */}
      </div>
      <div className='card-container'>
        {locArr.map(locObj => {
          return <LocationCard location={locObj} key={locObj.id} />
        })}
      </div>
    </section>
  );
}