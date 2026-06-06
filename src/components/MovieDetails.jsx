import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useBucket } from '../context/BucketContext';
import MovieGrid from './Moviegrid';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY

const MovieDetails = ()=> {

    const [details, setDetails] = useState(null);
    const [detailLoad, setDetailLoad] = useState(false);
    const [similar, setSimilar] = useState([]);
    const {id} = useParams();
    const {bucket, addToBucket} = useBucket();
    const isInBucket = bucket?.some(m => m.id === details?.id) ?? false

    useEffect(()=> {
        const movieFetch = async () => {
            setDetailLoad(true)
           const res = await fetch (`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
           const resData = await res.json();
           console.log(resData)
           setDetails(resData);

           const sim = await fetch (`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}`);
           const simData = await sim.json();
           setSimilar(simData.results);

           setDetailLoad(false)
           
        } 

        movieFetch()
    },[id])


    useEffect(()=> {
        window.scrollTo(0,0)
    },[id])
    return (

     <>   
      <div className="bg-bg min-h-screen text-cream">
        {detailLoad && <div className="fixed inset-0 bg-bg/80 flex items-center justify-center z-50">
              <div className="w-12 h-12 rounded-full border-4 border-gold/20 border-t-gold animate-spin"/>
            </div>
}
        {details && (
        <>
            <div className="relative w-full min-h-[500px]">
                <img src={`https://image.tmdb.org/t/p/w1280${details.backdrop_path}`} className="w-full inset-0 absolute h-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-transparent" />
                <div className="relative flex gap-6 px-6 pt-32 pb-8">
                    <img src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} className="w-[150px] rounded-lg flex-shrink-0 hidden md:block" />
                    <div className="flex flex-col gap-3">
                        <h1 className="font-heading text-5xl">{details.title}</h1>
                        {details.tagline && <p className="text-cream/60 italic">{details.tagline}</p>}
                        <div className="flex gap-3 items-center text-[0.8rem]">
                            <i className="ti ti-star-filled text-gold" />
                            <span>{details.vote_average.toFixed(1)}</span>
                            <span>·</span>
                            <span>{details.runtime} min</span>
                            <span>·</span>
                            <span>{details.release_date.slice(0, 4)}</span>
                        </div>
                        <div className="flex gap-2 flex-wrap">
                            {details.genres.map(genre => (
                                <span key={genre.id} className="border border-gold text-gold text-[0.75rem] px-3 py-1 rounded-full">{genre.name}</span>
                            ))}
                        </div>
                        <p className="text-[1rem] text-cream/80 max-w-2xl">{details.overview}</p>
                        <button onClick={()=> addToBucket(details)} className={isInBucket ? "bg-green-700 text-white w-fit font-bold px-5 py-2 rounded-lg mt-2" : "w-fit bg-gold text-bg font-bold px-5 py-2 rounded-lg mt-2"}>{isInBucket ? "✓ Added to Bucket" : "+ Add to Bucket"}</button>
                    </div>
                </div>
            </div>
        </>
    )}

    <MovieGrid movies={similar} title="Similar Movies" layout="carousel" variant="carousel"/>
    
</div>  

    
        
    </>

    )
}

export default MovieDetails