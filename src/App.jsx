import React, { useState, useEffect, useContext } from 'react'
import { Routes, Route, Navigate, useNavigate } from "react-router-dom"
import Searchlist from './views/Searchlist'
import Marvel from './views/Marvel'
import DC from './views/DC'
import Register from './views/Register'
import Fav from './views/Fav'
import Login from './views/Login'
import Footer from './views/foooter'

import { signOut } from "firebase/auth";
import { db, auth } from "./firebase";
import { AuthContext } from './context/Authcontext';
import { addDoc, collection, query, onSnapshot, doc, deleteDoc, where } from "firebase/firestore";

function App() {
	const [searchValue, setSearchValue] = useState('');
	const [movie, setMovies] = useState([]);
	const { currentUser, dispatch } = useContext(AuthContext);
	const [favourites, setFavourites] = useState([]);
	const navigate = useNavigate();

	const getMovieRequest = async (searchValue) => {
		const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=f93e7531`;
		const response = await fetch(url);
		const responseJson = await response.json();
		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};
	const submitHanddler = (e) => {
		e.preventDefault();
		getMovieRequest(searchValue);
	}

	const Logout = () => {
		signOut(auth).then(() => {
			dispatch({ type: "LOGOUT", payload: currentUser });
		}).catch((error) => {
			console.log(error);
		});
	}

	useEffect(() => {
		var mail = null;
		if (currentUser) {
			mail = currentUser.email;
		}
		const p = query(collection(db, "MovieCollection"), where("mail", "==", `${mail}`));
		const unsub = onSnapshot(p, (QuerySnapshot) => {
			let moviesArray = [];
			QuerySnapshot.forEach((doc) => {
				moviesArray.push({ ...doc.data(), id: doc.id });
			});
			setFavourites(moviesArray);
		});
		return () => unsub();
	}, [searchValue, currentUser]);

	const postData = async (Movie) => {
		if(!currentUser){
			alert("Please login to add to favourites");
		}else{
		await addDoc(collection(db, "MovieCollection"), {
			Poster: Movie.Poster,
			Title: Movie.Title,
			Type: Movie.Type,
			Year: Movie.Year,
			imdbID: Movie.imdbID,
			mail: currentUser.email
		});
	}
	}
	const addFavouriteMovie = (Movie) => {
		postData(Movie);
	};

	const deleteData = async (movie) => {
		var temp = movie.id;
		var str = temp.toString();
		await deleteDoc(doc(db, "MovieCollection", str));
	};
	const deleteHandler = (movie) => {
		console.log(movie);
		deleteData(movie);
	}

	return (
		<div>
			<nav className='bg-[#333333] text-white border-gray-200 pt-3 pb-3 flex flex-row '>
			<button className='ml-2 font-bold text-2xl' onClick={() => navigate("/") }>CINE<span className='bg-[#333333] text-[#309ccf]'>SEEK</span></button>
			
			<div className='flex flex-row ml-auto mr-2.5 bg-[#333333]'>
			{currentUser && <div className='mr-4 w-7 h-7 p-2 rounded-full object-cover bg-green-700 flex justify-center items-center text-white  font-bold'>{currentUser.email[0]}</div>}
			{!currentUser && <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold  px-2 py-1  rounded' onClick={() => navigate("/login")}>LOG IN</button>}
			{currentUser && <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold  px-2 py-1 rounded' onClick={Logout}>LOG OUT</button>}
			</div>
			</nav>
			<Routes>
				<Route path="/login" element={currentUser ? <Navigate to="/" /> : <Login />} />
				<Route path="/signup" element={currentUser ? <Navigate to="/" /> : <Register />} />

				<Route path="/" element={
					<div >
						<form onSubmit={submitHanddler} className='flex'>
							<input
								className="bg-[#fff] border border-gray-300 text-gray-900 text-nase rounded-md focus:ring-[#6469ff] focus:border-[#6469ff] outline-none  p-1.5 ml-auto mr-2.5 mt-2 mb-2 font-normal "
								id='srch'
								onChange={(event) => setSearchValue(event.target.value)}
								placeholder='Type to search...'
							></input>
						</form>

						<Searchlist
							movie={movie}
							handleFavouritesClick={addFavouriteMovie} />
						<Marvel />
						<DC/>
						{currentUser && <Fav movie={favourites}
							handleFavouritesClick={deleteHandler} />}
							<Footer/>
					</div>} />
			</Routes>
		</div>
	)
}

export default App