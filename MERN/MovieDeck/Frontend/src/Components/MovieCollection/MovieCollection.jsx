import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useLocation } from 'react-router-dom'
import { getNowPlaying, getPopular, getSingleMovie, getTopRated, getUpcoming } from '../../slice/slice';

const MovieCollection = () => {
    const location = useLocation();
    const dispatch= useDispatch();
    const { screenMode, isLoading, popularMovieList, nowPlayingMovieList, topRatedMovieList, upcomingMovieList } = useSelector((state) => state.movieReducer);
    const dataLoad = popularMovieList || nowPlayingMovieList || topRatedMovieList || upcomingMovieList
    const handlerDispatch = (idVal) => {
        dispatch(getSingleMovie({id: idVal}));
    }
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
    <div id='check'className='flex flex-row justify-center flex-wrap gap-4 px-2 py-4'  >
        {dataLoad?.results?.map((item)=> (
            <Link key={item.id} onClick={()=>handlerDispatch(item.id)}  to={`/category/${item.id}`}>
                <div className='w-[150px] cursor-pointer flex flex-col justify-center items-center hover:opacity-60'>
                    <img className='w-[150px]' src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt="img" />
                    {item.title}
                </div>
            </Link>
        ))}
    </div>
    </>
  )
}

export default MovieCollection
