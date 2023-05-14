import React from 'react'

function Fav({ movie, handleFavouritesClick }) {
    return (
        <div>
            <h1 className='text-2xl m-2 font-bold'>Your <span className='text-[#309ccf]'>Favourites</span></h1>
            <div className='flex flex-row flex-nowrap overflow-x-auto movie-list relative'>
            {movie.map((Movie, index) => (
                <div key={index} className='flex flex-shrink-0 m-3 h-[300px] w-[200px] hover:cursor-pointer transform hover:scale-110 transition-transform duration-300 ease-in-out group'
                 >
                    <img src={Movie.Poster} alt='movie'></img>
                    <div className='text-white absolute bg-[rgba(0,0,0,0.8)] w-[200px] bottom-0 text-center text-sm p-2 opacity-0 group-hover:opacity-100' >
          <pre className='overflow-auto movie-list ' >
					    <div >Title: {Movie.Title}</div>
						<div >Type: {Movie.Type}</div>
						<div >Year: {Movie.Year}</div>
                        <div className='text-[#cf3030]' onClick={() => handleFavouritesClick(Movie)} >Delete from favourites</div>
						</pre>
            </div>
        </div>
            ))}
            </div>
        </div>
    )
}

export default Fav