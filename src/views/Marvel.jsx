import React, { useState } from 'react'

function Marvel() {
  const [movies, setMovies] = useState([
    { "Title": "The Avengers", "Year": "2012", "imdbID": "tt0848228", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg" }, 
    { "Title": "Avengers: Endgame", "Year": "2019", "imdbID": "tt4154796", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg" },
    { "Title": "Avengers: Infinity War", "Year": "2018", "imdbID": "tt4154756", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg" },
    { "Title": "Avengers: Age of Ultron", "Year": "2015", "imdbID": "tt2395427", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg" },
    {"Title":"Iron Man","Year":"2008","imdbID":"tt0371746","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg"},{"Title":"Iron Man 3","Year":"2013","imdbID":"tt1300854","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SX300.jpg"},{"Title":"Iron Man 2","Year":"2010","imdbID":"tt1228705","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BZGVkNDAyM2EtYzYxYy00ZWUxLTgwMjgtY2VmODE5OTk3N2M5XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"},
    {"Title":"Captain America: The Winter Soldier","Year":"2014","imdbID":"tt1843866","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMzA2NDkwODAwM15BMl5BanBnXkFtZTgwODk5MTgzMTE@._V1_SX300.jpg"},{"Title":"Captain America: The First Avenger","Year":"2011","imdbID":"tt0458339","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_SX300.jpg"},{"Title":"Captain America: Civil War","Year":"2016","imdbID":"tt3498820","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"},
    {"Title":"The Incredible Hulk","Year":"2008","imdbID":"tt0800080","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMTE1Njg2MQ@@._V1_SX300.jpg"},
    {"Title":"Thor","Year":"2011","imdbID":"tt0800369","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"},{"Title":"Thor: Ragnarok","Year":"2017","imdbID":"tt3501632","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_SX300.jpg"},{"Title":"Thor: The Dark World","Year":"2013","imdbID":"tt1981115","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTQyNzAwOTUxOF5BMl5BanBnXkFtZTcwMTE0OTc5OQ@@._V1_SX300.jpg"},{"Title":"Thor: Love and Thunder","Year":"2022","imdbID":"tt10648342","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"},]);
  return (
    <div>
      <h1 className='text-2xl m-2 font-bold'>Marvel Top<span className='text-[#309ccf]'> Results</span></h1>
      <div className='flex flex-row flex-nowrap overflow-x-auto movie-list relative'>
      {movies.map((movies, index) => (
        <div key={index} className='flex flex-shrink-0 m-3 h-[300px] w-[200px] hover:cursor-pointer transform hover:scale-110 transition-transform duration-300 ease-in-out group'>
          <img  src={movies.Poster} alt='movie'></img>
          <div className='text-white absolute bg-[rgba(0,0,0,0.8)] w-[200px] bottom-0 text-center text-sm p-2 opacity-0 group-hover:opacity-100' >
          <pre className='overflow-auto movie-list ' >
					    <div >Title: {movies.Title}</div>
						<div >Type: {movies.Type}</div>
						<div >Year: {movies.Year}</div>
						</pre>
            </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Marvel