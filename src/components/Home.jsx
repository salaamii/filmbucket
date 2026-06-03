import {useState, useEffect} from "react";
import MovieGrid from "./Moviegrid";
import Genres from "../data/genres";
import GenreSection from "./genreSection";

import Hero from "./Hero";

const Home = ({featured, loading, trending})=> {

    return (
      <>  
            {loading && (
                <div className="fixed inset-0 bg-bg/80 flex items-center justify-center z-50">
                    <div className="w-12 h-12 rounded-full border-4 border-gold/20 border-t-gold animate-spin"/>
                </div>
            )}
            <Hero featured={featured} loading={loading}/>
            <MovieGrid movies={trending} title="Trending Now" layout="carousel" variant='carousel'/>
            <GenreSection trending={trending}/>
      </>  
    )
}

export default Home