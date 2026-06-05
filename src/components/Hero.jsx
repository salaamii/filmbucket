import {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Genres from "../data/genres";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY



const Hero = ({featured, loading}) => {

    const navigate = useNavigate();

   
    const [currentIndex, setCurrentIndex] = useState(0);

   

    useEffect(()=> {
        if(!featured.length) return
        const interval = setInterval(()=> {
            setCurrentIndex(prev => (prev + 1) % featured.length)
        
        }, 5000)

        return () => clearInterval(interval)
    }, [featured])

    if (loading || !featured.length) return null;

    return (
        <div className="relative overflow-hidden w-full h-[60vh]">
            <img src={`https://image.tmdb.org/t/p/w1280${featured[currentIndex].backdrop_path}`} className="w-full h-full object-center object-cover" alt="" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg"></div>
            <div className="absolute bottom-8 z-10 px-4 flex flex-col gap-3">

                <h3 className="text-gold uppercase tracking-widest text-xs">🎬 Featured Tonight</h3>
                <h1 className="text-cream uppercase font-heading text-6xl">{featured[currentIndex].title}</h1>
                <div className="flex gap-3 items-center font-body text-cream ">
                    <div className="flex items-center gap-1">
                        <i className="ti ti-star-filled text-gold text-xl"></i>
                        <span className="">{featured[currentIndex].vote_average.toFixed(1)}</span>
                    </div>
                    <span className="">{featured[currentIndex].release_date.slice(0, 4)}</span>
                    <span className="">{featured[currentIndex].genre_ids.slice(0, 3).map(id => Genres[id]).join(' · ')}</span>
                </div>

                <div className="flex items-center gap-3">
                    <button className="bg-gold text-black px-4 py-2 rounded-[20px] border border-gold hover:bg-black hover:text-cream transition-colors duration-200">Add to bucket</button>
                    <button className="border border-gold text-white px-4 py-2 hover:bg-gold hover:text-black transition-colors duration-200 rounded-[20px]" onClick={()=> navigate(`/movie/${featured[currentIndex].id}`)}>Details</button>
                </div>
            </div>
        </div>
    )
}

export default Hero