import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import './App.css';

const App = () => {
  const API_Key = "20814150-75c059b3626a635abb4e88de0";

  //These are out states
  const [images, setImages] = useState([]); //Contains all the pictures we are going to have
  const [currentPage, setCurrentPage] = useState(1); //This state will allow us to move to the next page and back
  const [search, setSearch] = useState('');
  const [inputVal, setInputval] = useState('');

  const handleSearch = e => {
    e.preventDefault();
    setSearch(inputVal);
    setInputval('');
  }

  useEffect(() => {
    // since we want our data as soon as the page loads
    fetch(
      `https://pixabay.com/api/?key=${API_Key}&q=${search}&image_type=photo&per_page=9&page=${currentPage}&pretty=true`
    )
    .then((res) => res.json())
    .then((data) => setImages(data.hits));
  }, []);

  return (
    <div className="App">
     <Hero 
        images = {images}
        inputVal = {inputVal}
        setInputval = {setInputval}
        handleSearch = {handleSearch}
     />
    </div>
  );
}

export default App;
