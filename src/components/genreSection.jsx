import { useState, useEffect} from "react";
import Genres from "../data/genres";
import MovieGrid from "./Moviegrid";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY

const GenreSection = ({ trending }) => {
    const genres = Object.values(Genres);
    const [activeGenre, setActiveGenre] = useState(genres[0]);
    const [genreMovies, setGenreMovies] = useState([]);

   const genreId = Object.entries(Genres).find(([id, name]) => name === activeGenre)?.[0] 
   const filteredMovies = trending.filter(movie => movie.genre_ids.includes(Number(genreId)))

    useEffect(()=> {
        const fetchGenre = async (result) => {
            const genResult = await fetch (`https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&api_key=${API_KEY}`);
            const genData = await genResult.json();   
            setGenreMovies(genData.results);         
        }

        fetchGenre();
    }, [activeGenre])


   return (
        <>
            <h1 className="text-cream font-heading text-2xl mb-4 mt-6 px-3">BROWSE BY GENRE</h1>
           <select value={activeGenre} onChange={(e)=>setActiveGenre(e.target.value)} id="" className="bg-[#0a0a0f] mt-2 mb-5 ml-3 text-cream border border-gold rounded-lg px-3 py-2 outline-none cursor-pointer">
                {genres.map((genre)=> (
                    <option key={genre} value={genre}>{genre}</option> 
                ))}
            </select>
            <MovieGrid movies={genreMovies} layout="grid" variant="grid"/>
        </>    
    )

  
}

export default GenreSection;
