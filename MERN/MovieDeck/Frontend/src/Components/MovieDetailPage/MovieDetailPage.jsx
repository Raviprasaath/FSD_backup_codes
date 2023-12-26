import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoMdCloseCircleOutline } from "react-icons/io";
import { getTrailerOut } from '../../slice/slice';
import { FidgetSpinner } from 'react-loader-spinner'
import LazyLoader from '../LazyLoader/LazyLoader';

const MovieDetailPage = () => {
  const { singleMovieFetch, screenMode, trailerLink, isLoading } = useSelector((state) => state.movieReducer);
  const [showTrailerModal, setShowTrailerModal] = useState(false);
  const [trailerPath, setTrailerPath] = useState("");
  const [count, setCount] = useState(0);

  const [spinner, setSpinner] = useState(true);

  const dispatch = useDispatch();

  const localStore = JSON.parse(localStorage.getItem('watchList')) || [];

  const handleWatchTrailer = (id) => {
    dispatch(getTrailerOut({id: id}))
    setCount((prev)=>prev+1);
    setShowTrailerModal(true);

    const time = setTimeout(()=> {
      setSpinner(true);
    }, [500])
    setSpinner(false);
    return (()=> clearTimeout(time));
  };

  const handleCloseTrailerModal = () => {
    setShowTrailerModal(false);
  };

  const handlerAddToWatchList = (movie) => {
    localStore.push(movie)
    localStorage.setItem('watchList', JSON.stringify(localStore));
  }

  useEffect(()=> {
    if (trailerLink) {
      const key = trailerLink?.results?.filter((item)=>item.name.includes("Trailer")||item.name.includes("Teaser"))
      setTrailerPath(key[0].key);
    }
    

  }, [trailerLink, showTrailerModal])

  return (
    <>
      {isLoading && count===0 ? (<div className={`w-full h-[500px] flex justify-center items-center ${screenMode==="dark"?"bg-slate-800 text-white":"bg-white text-black"}`}>
        <LazyLoader />
      </div>):(
        <div className={`relative min-h-screen flex flex-col ${screenMode==="dark"?"bg-slate-800 text-white":"bg-white text-black"} ` }>
          <div className="h-1/2 sm:h-2/3 lg:h-1/2 relative"/>
            <img className='opacity-50' src={`https://image.tmdb.org/t/p/original/${singleMovieFetch?.backdrop_path}`} alt="img" />
            <div className="flex-grow ">
              <div className="top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2 absolute">
                <img
                  className="w-[350px] rounded-lg shadow-lg"
                  src={`https://image.tmdb.org/t/p/original/${singleMovieFetch?.poster_path}`}
                  alt={singleMovieFetch?.title}
                />
              </div>
              <div className="container mx-auto p-8">          
                <div className="mt-8">
                  <h1 className="text-3xl font-bold">{singleMovieFetch?.title}</h1>
                  <p className="text-lg text-gray-400">
                    Released on {singleMovieFetch?.release_date}
                  </p>

                  <div className="mt-4 flex items-center">
                    <span className="bg-yellow-500 text-gray-900 px-2 py-1 rounded">
                      {singleMovieFetch?.vote_average.toFixed(1)} / 10
                    </span>
                    <span className="ml-2">{singleMovieFetch?.vote_count} votes</span>
                  </div>

                  <div className="mt-6">
                    <h2 className="text-xl font-bold">Overview</h2>
                    <p className="mt-2">{singleMovieFetch.overview}</p>
                  </div>

                  <div className="mt-6">
                    <h2 className="text-xl font-bold">Genres</h2>
                    <div className="flex mt-2">
                      {singleMovieFetch?.genres?.map((genre) => (
                        <span
                          key={genre.id}
                          className="bg-gray-600 text-white px-2 py-1 mr-2 rounded"
                        >
                          {genre.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <h2 className="text-xl font-bold">Production Companies</h2>
                    <ul className="mt-2">
                      {singleMovieFetch?.production_companies?.map((company) => (
                        <li key={company.id} className="text-gray-400">
                          {company.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex justify-center gap-5' > 
              <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white text-[1rem] px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-blue" onClick={() => handleWatchTrailer(singleMovieFetch?.id)}>
                Watch Trailer
              </button>

              <button className="mt-4 bg-green-500 hover:bg-green-700 text-white text-[1rem] px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-green" onClick={() => handlerAddToWatchList(singleMovieFetch)}>
                Add to Watch List
              </button>
            </div>

            {showTrailerModal && spinner && (
              <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                <div className="relative">
                  <button className="absolute top-0 right-0 text-[30px] text-white" onClick={()=>handleCloseTrailerModal()}>
                    <IoMdCloseCircleOutline />
                  </button>
                  <iframe
                    title="Trailer"
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${trailerPath}`}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}

            {!spinner && (
                <div className="absolute z-5 top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out">
                  <FidgetSpinner
                    visible={true}
                    height="120"
                    width="120"
                    ariaLabel="fidget-spinner-loading"
                    wrapperStyle={{}}
                    wrapperClass="fidget-spinner-wrapper"
                    />
                </div>
              )}
        </div>
      )}
    </>
    
  );
};

export default MovieDetailPage;
