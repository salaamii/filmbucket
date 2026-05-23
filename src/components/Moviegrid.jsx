import MovieCard from "./MovieCard";

const MovieGrid = ({movies, title, layout})=> {

    return(
       
      <>  
            {title && <h2 className="text-cream font-heading text-2xl mb-4 mt-6 px-3">{title}</h2>}
            <div className={layout === 'carousel' ? 'flex gap-3 overflow-x-auto px-3' : 'flex flex-wrap gap-4 items-center px-3'}>
                {movies.map((movie)=> (
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
            </div>

        </>   
    )
}

export default MovieGrid;