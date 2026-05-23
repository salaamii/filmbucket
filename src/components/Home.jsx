import {useState, useEffect} from "react";
import MovieGrid from "./Moviegrid";

import Hero from "./Hero";

const Home = ({featured, loading, trending})=> {
    return (
      <>  
            <Hero featured={featured} loading={loading}/>
            <MovieGrid movies={trending} title="Trending Now" layout="carousel"/>
      </>  
    )
}

export default Home