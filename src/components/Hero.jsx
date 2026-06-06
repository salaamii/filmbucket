import {useState, useEffect, useRef} from "react";
import { useNavigate } from "react-router-dom";
import Genres from "../data/genres";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY



const Hero = ({featured, loading, toBucket, bucket}) => {

    const navigate = useNavigate();
       
   
    const [currentIndex, setCurrentIndex] = useState(0);
     const isInBucket = bucket?.some(m => m.id === featured[currentIndex]?.id) ?? false
    const intervalRef = useRef(null);

    useEffect(()=> {
        if(!featured.length) return
        intervalRef.current = setInterval(()=> {
            setCurrentIndex(prev => (prev + 1) % featured.length)
            
        }, 5000)

        return () => clearInterval(intervalRef.current)
    }, [featured, currentIndex])

    if (loading || !featured.length) return null;

    const prevSlide = () => { 
        clearInterval(intervalRef.current) 
        setCurrentIndex(prev=> (prev - 1 + featured.length) % featured.length) }

    const nextSlide = () => { 
        clearInterval(intervalRef.current)
        setCurrentIndex(prev=> (prev + 1) % featured.length) }

    return (
        <div className="relative overflow-hidden w-full h-[60vh]">
            <button onClick={prevSlide} className="absolute left-3 top-[30%] -translate-y-1/2 z-10 bg-[rgba(0,0,0,0.8)] text-white font-4 w-12 h-20 rounded-full flex items-center justify-center hover:bg-gold hover:text-black transition-colors duration-200">
    <i className="ti ti-chevron-left text-2xl"></i>
</button>

<button onClick={nextSlide} className="absolute right-3 top-[30%] -translate-y-1/2 z-10 bg-[rgba(0,0,0,0.8)] text-white w-12 h-20 rounded-full flex items-center justify-center hover:bg-gold hover:text-black transition-colors duration-200">
    <i className="ti ti-chevron-right text-2xl"></i>
</button>
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
                        <button onClick={()=> toBucket(featured[currentIndex])} className={isInBucket ? "bg-green-700 text-white w-fit font-bold px-5 py-2 rounded-lg mt-2" : "w-fit bg-gold text-bg font-bold px-5 py-2 rounded-lg mt-2"}>{isInBucket ? "✓ Added to Bucket" : "+ Add to Bucket"}</button>
                    <button className="border border-gold text-white px-4 py-2 hover:bg-gold hover:text-black transition-colors duration-200 rounded-[20px]" onClick={()=> navigate(`/movie/${featured[currentIndex].id}`)}>Details</button>
                </div>
            </div>
        </div>
    )
}

export default Hero