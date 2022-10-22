import {useState, useEffect} from 'react'
import { AiOutlineMenu, } from 'react-icons/ai'
import { BsQuestionLg, BsSearch } from 'react-icons/bs'

import './App.css';

function App() {
  const [movies, setMovies] = useState(0)
  const [input, setInput] = useState('')


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
    
    // console.log(movies[0].poster_path)
    // /3uDwqxbr0j34rJVJMOW6o8Upw5W.jpg
    // https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg

    const onChange = (e) => {
      setInput(e.target.value)
      console.log(input)
    }

    const handleKeyDown = (e) => {
      console.log(e.key)
      if(e.key === 'Enter') {
        console.log('in if')
        searchMovie(input)
      }
    }

    const searchMovie = () => {
      console.log('searched')
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=1cb8a2207e718162b37eb36283a1e3b4&query=${input}`)
        .then(res => res.json())
        .then(data => setMovies(data.results))
    }

  return (
    <div className="App">
      <header>
        {/* <BsQuestionLg /> */}
        <input type="text" 
          id='search'
          className='search'
          onChange={(e) => onChange(e)}
          // value={input}
          onKeyDown={handleKeyDown}
        />
        <BsSearch className='search-icon' onClick={() => searchMovie(input)}/>
        {/* <AiOutlineMenu/> */}
      </header>
      <main>
        <div className="movies-cont">
        {movies.length > 0 && (
          movies.map((movie, i) => (
            <div className="movie">
              <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" className="movie-img" />
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
