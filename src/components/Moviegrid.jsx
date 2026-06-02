import MovieCard from "./MovieCard";

const MovieGrid = ({movies, title, layout, variant})=> {

    return(
       
      <>  
            {title && <h2 className="text-cream font-heading text-2xl mb-4 mt-6 px-3">{title}</h2>}
            <div className={layout === 'carousel' ? 'flex gap-3 overflow-x-auto px-3' : 'flex flex-wrap gap-4 items-center px-3'}>
                {movies.map((movie)=> (
                    <MovieCard key={movie.id} movie={movie} variant={variant}/>
                ))}
            </div>

        </>   
    )
}

export default MovieGrid;