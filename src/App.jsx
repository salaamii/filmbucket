import { useState, useEffect } from "react";
import {Routes, Route} from 'react-router-dom';
import MovieGrid from "./components/Moviegrid";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";
import { useNavigate } from "react-router-dom";
import BucketList from "./components/bucket";


const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

function App () {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
   const [trending, setTrending] = useState([]);
    const [trendingLoading, setTrendingLoading] = useState(true); 

  const goHome = ()=> setMovies([]);

  // SEARCH RESULT FETCH

  const searchMovies = async (query) => {
    setLoading(true);
    setError(null);

    try {  
      const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`);
      const data = await res.json();

      setMovies(data.results);
      navigate('/')

      console.log(data.results);

    } catch (err) {
      setError ('Oops! something wEnT wRoNg');
    } finally {
      setLoading(false);
    }

  }  

    // HERO DATA FETCH

   useEffect(()=> {
          const fetchTrending = async() => {
              const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);
              const data = await res.json()
              setTrending(data.results)
              setTrendingLoading(false);
          }
  
          fetchTrending()
      }, [])



  return (
    <div className="bg-bg">
      
      <Navbar onSearch={searchMovies} onHome={goHome}/>
      <Routes>
          <Route path="/" element={ 
            <>  
              {movies.length === 0 && <Home featured={trending.slice(0,5)} trending={trending} loading={trendingLoading}/>}
              {movies.length > 0 && <MovieGrid movies={movies} title="Search Results" layout="grid" />}

            </>  

          }/>
          <Route path="/movie/:id" element={<MovieDetails />}/>
          <Route path="/bucket" element={<BucketList />}/>
          
      </Routes>
    </div>  
  )

}


export default App