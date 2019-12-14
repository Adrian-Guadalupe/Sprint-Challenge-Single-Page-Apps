import React, { useState, useEffect } from "react";
import CharacterCard from './CharacterCard';

export default function SearchForm({ characters }) {

  const [searchChar, setSearchChar] = useState('');
  const [searchResults, setSearchResults] = useState(characters);

  useEffect(() => {
    const results = characters.filter(character => {
      return character.name.toLowerCase().includes(searchChar.toLowerCase());
    })
    setSearchResults(results);
  }, [searchChar])

  const handleChange = event => {
    setSearchChar(event.target.value);
  }

  return (
    <section>
      <form className='search-form'> 
        <label htmlFor='name'>Search Characters by Name:</label>
        <input
          id='name'
          type='text'
          name='textfield'
          placeholder='  enter character name'
          onChange={handleChange}
          value={searchChar}
        />
      </form>

      <div className='card-container'>
        {searchResults.map(character => {
          return <CharacterCard character={character} key={character.id}/>
        })}      
      </div>
    </section>
  );
}