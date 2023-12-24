import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getNowPlaying, getPopular, getTopRated, getUpcoming } from '../../slice/slice';
import Carousel from '../Carousel/Carousel';
import { Suspense } from 'react';
import Loader from "../LazyLoader/LazyLoader"
import HomeHeaderCarousel from '../HomeHeaderCarousel/HomeHeaderCarousel';
import { Link } from 'react-router-dom';

const Homepage = () => {
    const { screenMode, isLoading, popularMovieList, nowPlayingMovieList, topRatedMovieList, upcomingMovieList } = useSelector((state) => state.movieReducer);
    const dispatch = useDispatch();

    const LazyCarousel = React.lazy(()=>import("../Carousel/Carousel"));
    

    useEffect(()=> {
        dispatch(getNowPlaying({ type: 'now_playing', page: 1 }));
        dispatch(getTopRated({ type: 'top_rated', page: 1 }));
        dispatch(getPopular({ type: 'popular', page: 1 }));
        dispatch(getUpcoming({ type: 'upcoming', page: 1 }));
    }, [])

    return (
        <>
            <div className={`w-[100%] m-auto px-4 ${screenMode==="dark"?"bg-slate-800 text-white":"bg-white text-black"}`}>                
                <HomeHeaderCarousel />
                <Link to='category' state={{type: "upcoming"}}>
                    <h2 className='cursor-pointer font-bold uppercase p-1 hover:underline'>Upcoming</h2>
                </Link>
                <Suspense fallback={<Loader />}>
                    <LazyCarousel props={upcomingMovieList}/>                
                </Suspense>
                <div className='my-4'></div>
                <Link to='category' state={{type: "now-showing"}}>
                    <h2 className='cursor-pointer font-bold uppercase p-1 hover:underline'>Now Showing</h2>
                </Link>
                <Suspense fallback={<Loader />}>
                    <LazyCarousel props={nowPlayingMovieList}/>
                </Suspense>
                <div className='my-4'></div>
                <Link to='category' state={{type: "popular"}}>
                    <h2 className='cursor-pointer font-bold uppercase p-1 hover:underline'>Popular Movies</h2>
                </Link>
                <Suspense fallback={<Loader />}>
                    <LazyCarousel props={popularMovieList}/>
                </Suspense>
                <div className='my-4'></div>
                <Link to='category' state={{type: "top-rated"}}>
                    <h2 className='cursor-pointer font-bold uppercase p-1 hover:underline'>Top Rated</h2>
                </Link>
                <Suspense fallback={<Loader />}>
                    <LazyCarousel props={topRatedMovieList}/>
                </Suspense>
            </div>
        </>
  )
}

export default Homepage
