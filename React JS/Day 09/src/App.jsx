import React, { useEffect, useState } from 'react'
import Input from './components/Input'
import Card from './components/Card'

export default function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");


  function setSearchValue(value) {
    setSearch(value);
  }

  const getMovies = async () => {
    let API = ""
    if (search == "") {
      API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
    } else {
      API = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${search}`
    }
    const response = await fetch(API);
    const data = await response.json();
    setMovies(data.results)
  }

  useEffect(
    () => {
      getMovies()
    },
    [search] //only run once when the component mounts or when 'search' changes
  )





  return (
    <div className='container-xl'>
      <Input setSearchValue={setSearchValue} />
      <Card movies={movies} />
    </div>
  )
}
