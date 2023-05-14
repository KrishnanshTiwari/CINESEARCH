import React, { useState } from 'react'

function DC() {
  const [movies, setMovies] = useState([
   {"Title":"Batman v Superman: Dawn of Justice","Year":"2016","imdbID":"tt2975590","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{"Title":"Superman Returns","Year":"2006","imdbID":"tt0348150","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BNDUzZGRhNzktYTZkMC00YWFiLTljMDEtMTk2OWJhYzAyYmY2XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"},{"Title":"Batman v Superman: Dawn of Justice (Ultimate Edition)","Year":"2016","imdbID":"tt18689424","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BOTRlNWQwM2ItNjkyZC00MGI3LThkYjktZmE5N2FlMzcyNTIyXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg"},{"Title":"Superman & Lois","Year":"2021–","imdbID":"tt11192306","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BMzdmYjAyODUtMTFkOS00MDg1LTljMDAtNzhiYTg5NjY1NjM5XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg"},
   {"Title":"Batman Begins","Year":"2005","imdbID":"tt0372784","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{"Title":"The Batman","Year":"2022","imdbID":"tt1877830","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300.jpg"},
   {"Title":"Wonder Woman","Year":"2017","imdbID":"tt0451279","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTYzODQzYjQtNTczNC00MzZhLTg1ZWYtZDUxYmQ3ZTY4NzA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"},
   {"Title":"The Dark Knight","Year":"2008","imdbID":"tt0468569","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg"},{"Title":"The Dark Knight Rises","Year":"2012","imdbID":"tt1345836","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg"},{"Title":"Batman: The Dark Knight Returns, Part 1","Year":"2012","imdbID":"tt2313197","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg"},{"Title":"Batman: The Dark Knight Returns, Part 2","Year":"2013","imdbID":"tt2166834","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYTEzMmE0ZDYtYWNmYi00ZWM4LWJjOTUtYTE0ZmQyYWM3ZjA0XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"},
  ]);
  return (
    <div>
      <h1 className='text-2xl m-2 font-bold'>DC Top<span className='text-[#309ccf]'> Results</span></h1>
      <div className='flex flex-row flex-nowrap overflow-x-auto movie-list relative'>
      {movies.map((movies, index) => (
        <div key={index} className='flex flex-shrink-0 m-3 h-[300px] w-[200px] hover:cursor-pointer transform hover:scale-110 transition-transform duration-300 ease-in-out group'>
          <img  src={movies.Poster} alt='movie'></img>
          <div className='text-white absolute bg-[rgba(0,0,0,0.8)] w-[200px] bottom-0 text-center text-sm p-2 opacity-0 group-hover:opacity-100' >
          <pre className='overflow-auto movie-list ' >
					    <div>Title: {movies.Title}</div>
						<div>Type: {movies.Type}</div>
						<div>Year: {movies.Year}</div>
						</pre>
            </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default DC