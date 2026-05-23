const MovieCard = ({movie}) => {
    return (
        <div className="card mb-3 relative h-[260px] w-[190px] rounded-[10px] flex-shrink-0 overflow-hidden" >
            <i className="ti ti-plus ti-2xl absolute right-3 top-3 w-7 h-7 rounded-full flex items-center justify-center text-white cursor-pointer bg-[rgba(10,10,15,0.9)]"></i>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
            <div className="details absolute flex flex-col gap-2 bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent pt-12 pl-2 pb-2">
                <p className="text-[0.9rem] text-cream font-bold cursor-pointer">{movie.title}</p>

                <div className="flex gap-2 items-center">
                    <i className="ti ti-star-filled text-gold "></i>
                    <span className="text-[0.7rem] text-cream">{movie.vote_average.toFixed(1)}</span>
                </div>    
            </div>
        </div>
        
    )
}

export default MovieCard;