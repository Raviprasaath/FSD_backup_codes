import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom'
import { getNowPlaying, getPopular, getSingleMovie, getTopRated, getUpcoming } from '../../slice/slice';

const MovieCollection = () => {
    const location = useLocation();
    const dispatch= useDispatch();
    const { screenMode, isLoading, popularMovieList, nowPlayingMovieList, topRatedMovieList, upcomingMovieList } = useSelector((state) => state.movieReducer);
    const dataLoad = popularMovieList || nowPlayingMovieList || topRatedMovieList || upcomingMovieList
    console.log(dataLoad)
    useEffect(()=> {
        if (location.state.type === "upcoming") {
            dispatch(getUpcoming())
        } else if (location.state.type === "now-showing") {
            dispatch(getNowPlaying())
        } else if (location.state.type === "popular") {
            dispatch(getPopular())
        } else if (location.state.type === "top-rated") {
            dispatch(getTopRated())
        }
    }, [])
  return (
    <>
        {dataLoad?.results?.map((item)=> (
            <Link key={item.id} onClick={()=>dispatch(getSingleMovie({id: item.id}))} to={`/category/${item.id}`}>
                <div className='flex' >
                <div className='cursor-pointer flex flex-col justify-center items-center hover:opacity-60'>
                    <img className='w-[150px]' src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt="img" />
                    {item.title}
                </div>
            </div>
            </Link>

    ))}
    </>
  )
}

export default MovieCollection
