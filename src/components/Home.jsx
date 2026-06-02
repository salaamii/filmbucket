import {useState, useEffect} from "react";
import MovieGrid from "./Moviegrid";
import Genres from "../data/genres";
import GenreSection from "./genreSection";

import Hero from "./Hero";

const Home = ({featured, loading, trending})=> {

    return (
      <>  
            <Hero featured={featured} loading={loading}/>
            <MovieGrid movies={trending} title="Trending Now" layout="carousel" variant='carousel'/>
            <GenreSection trending={trending}/>
      </>  
    )
}

export default Home