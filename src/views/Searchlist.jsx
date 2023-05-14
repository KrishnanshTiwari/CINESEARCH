import React from 'react'

function Searchlist(props) {
  return (
    <div>
      <div className='flex flex-row flex-nowrap overflow-x-auto movie-list relative'>
      {props.movie.map((mov, index) => (
         <div key={index} className='flex flex-shrink-0 m-3 h-[300px] w-[200px] hover:cursor-pointer transform hover:scale-110 transition-transform duration-300 ease-in-out group'
                          onClick={() => props.handleFavouritesClick(mov)} >
          <img src={mov.Poster} alt='movie'></img>
          <div className='text-white absolute bg-[rgba(0,0,0,0.8)] w-[200px] bottom-0 text-center text-sm p-2 opacity-0 group-hover:opacity-100' >
          <pre className='overflow-auto movie-list ' >
					    <div >Title: {mov.Title}</div>
						<div >Type: {mov.Type}</div>
						<div >Year: {mov.Year}</div>
            <div >Add to Favourites <sapn className='text-red-500'>❤</sapn></div>
						</pre>
            </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Searchlist