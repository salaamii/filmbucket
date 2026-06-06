import { useState, useEffect } from "react";
import MovieGrid from "./Moviegrid";
const API_KEY=import.meta.env.VITE_TMDB_API_KEY

const Cinema = ()=> {
    const [cinemaNow, setCinemaNow] = useState([]);
    const [cinemaLoading, setCinemaLoading] = useState(false);

    useEffect(()=> {
        setCinemaLoading(true)

        const cinemaFetch = async () => {
            const res = await fetch (`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`)
            const data = await res.json();

            setCinemaNow(data.results);
            setCinemaLoading(false);
        }

        cinemaFetch()
    }, [])


    return (
        <div className="bg-bg/60">
        <MovieGrid movies={cinemaNow} title="NOW SHOWING" layout="grid" variant="grid"/>
        </div>
    )

}

export default Cinema;
