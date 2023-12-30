import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom'
import { getNowPlaying, getPopular, getSingleMovie, getTopRated, getUpcoming } from '../../slice/slice';
import { Discuss } from 'react-loader-spinner'


const MovieCollection = () => {
    const location = useLocation();
    const dispatch= useDispatch();
    const { screenMode, popularMovieList, nowPlayingMovieList, topRatedMovieList, upcomingMovieList } = useSelector((state) => state.movieReducer);
    const [loader, setLoader] = useState(true);
    const [page, setPage] = useState(1);
    const [dataLoad, setDataLoad] = useState([]);

    const handlerDispatch = (idVal) => {
        dispatch(getSingleMovie({id: idVal}));
    }

    const handlerPageControl = (value) => {
        if (value === "prev" && page > 1) {
            setPage(prev => prev - 1)
        } else if (value === "next" && page <= dataLoad.total_pages) {
            setPage(prev => prev + 1)
        }
    }

    useEffect(()=> {
        if (location.state.type === "upcoming") {
            dispatch(getUpcoming({ type: 'upcoming', page: page }))
            setDataLoad(upcomingMovieList)
        } else if (location.state.type === "now-showing") {
            dispatch(getNowPlaying({ type: 'now_playing', page: page }))
            setDataLoad(nowPlayingMovieList)
        } else if (location.state.type === "popular") {
            dispatch(getPopular({ type: 'popular', page: page } ))
            setDataLoad(popularMovieList)
        } else if (location.state.type === "top-rated") {
            dispatch(getTopRated({ type: 'top_rated', page: page }))
            setDataLoad(topRatedMovieList)
        }
        const delay = setTimeout(()=> {
            setLoader(false);
        }, 1000)
        return (()=>delay);
    }, [page, upcomingMovieList, nowPlayingMovieList, popularMovieList, topRatedMovieList])

  return (
    <>  
        <div className={`flex flex-col justify-center items-center ${screenMode==="dark"?"bg-slate-800 text-white":"bg-white text-black"}`}>
            <div id='check'className={`flex flex-row justify-center flex-wrap gap-4 px-2 py-4 `}  >
                {dataLoad?.results?.map((item)=> (
                    <Link key={item.id} onClick={()=>handlerDispatch(item.id)}  to={`page-${page}/${item.id}`}>
                        <div className='w-[150px] cursor-pointer flex flex-col justify-center items-center hover:opacity-60'>
                            {loader ? (<div className={`flex justify-center items-center ${screenMode==="dark"?"bg-slate-800 text-white":"bg-white text-black"}`}>
                                <Discuss
                                    visible={true}
                                    height="80"
                                    width="80"
                                    ariaLabel="discuss-loading"
                                    wrapperStyle={{}}
                                    wrapperClass="discuss-wrapper"
                                    color="#fff"
                                    backgroundColor="#F4442E"
                                    />
                            </div>):(
                                <img className='w-[150px]' src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt="img" />
                            )}
                            {item.title}
                        </div>
                    </Link>
                ))}
            </div>
            <div className='flex gap-3 '>
                <button onClick={()=>handlerPageControl("prev")} className="bg-green-500 hover:bg-green-700 text-white text-[1rem] px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-green">
                    Prev
                </button>
                <div className="bg-green-500 text-white text-[1rem] px-3 py-1 rounded-md">
                    Current Page: {page}
                </div>
                <button onClick={()=>handlerPageControl("next")} className="bg-green-500 hover:bg-green-700 text-white text-[1rem] px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-green">
                    Next
                </button>
            </div>
        </div>
    </>
  )
}

export default MovieCollection
