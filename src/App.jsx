import {useState, useEffect} from 'react'
import { AiOutlineMenu, } from 'react-icons/ai'
import { BsQuestionLg } from 'react-icons/bs'

import './App.css';

function App() {
  const [movies, setMovies] = useState(0)

  let URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1cb8a2207e718162b37eb36283a1e3b4&page=1`

  useEffect(() => {
    if(!movies) {
      fetchMovies()
    } else {
      // movieRenderFunction()
    }
  }, [])

  let moviesToDisplay

  const fetchMovies = () => {
    fetch(URL)
      .then(res => res.json())
      .then(data => setMovies(data.results))
  }



 
  

  return (
    <div className="App">
      <header>
        <BsQuestionLg />
        <input type="text" 
          id='search'
          className='search'
        />
        <AiOutlineMenu/>
      </header>
      <main>
        <div className="movies-cont">
        {movies.length > 0 && (
          movies.map((movie, i) => (
            <div className="movie">
              <img src="" alt="" className="movie-img" />
              <p className="title">{movie.title}</p>
            </div>
          ))
        )}
        </div>
      </main>
      <nav>
        <div className="nav-item">Genres</div>
        <div className="nav-item" id="home-button">Home</div>
        <div className="nav-item">Favorites</div>
      </nav>
    </div>
  );
}

export default App;
