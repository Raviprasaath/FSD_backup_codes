import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { getNowPlaying, getPopular, getSingleMovie, getTopRated, getUpcoming } from '../../slice/slice';
import { Discuss } from 'react-loader-spinner'


const MovieCollection = () => {
    const location = useLocation();
    const dispatch= useDispatch();
    const navigate = useNavigate();
    const { screenMode, popularMovieList, nowPlayingMovieList, topRatedMovieList, upcomingMovieList } = useSelector((state) => state.movieReducer);
    const [page, setPage] = useState(2);
    const [dataLoad, setDataLoad] = useState([]);
    const [loadDelay, setLoadDelay] = useState(false);
    const [counter, setCounter] = useState(0);

    const fetchingInitiator = location.pathname.split('/')


    const handlerDispatch = (idVal) => {
        dispatch(getSingleMovie({id: idVal}));
    }
    const handlerPageControl = (value) => {
        if (value === "prev" && page > 1) {
            setPage(prev => prev - 1);
            navigate(`/${fetchingInitiator[1]}/page-${page}`);
            // rendering();
        } else if (value === "next" && page <= dataLoad.total_pages) {
            setPage(prev => prev + 1)
            navigate(`/${fetchingInitiator[1]}/page-${page}`)
            // rendering();
        }
        console.log(page);
    }

    console.log(dataLoad)

    function rendering() {
        const fetchingPage = location.pathname.split('/');
        const pageNumber = fetchingPage[2].charAt(5)?fetchingPage[2].charAt(5): 1;
        if (fetchingPage[1] === 'upcoming') {
            dispatch(getUpcoming({ type: fetchingPage[1], page: pageNumber }));
        } else if (fetchingPage[1] === 'popular') {
            dispatch(getPopular({ type: fetchingPage[1], page: pageNumber }));
        } else if (fetchingPage[1] === 'now-showing') {
            dispatch(getNowPlaying({ type: fetchingPage[1], page: pageNumber }));
        } else if (fetchingPage[1] === 'top-rated') {
            dispatch(getTopRated({ type: fetchingPage[1], page: pageNumber }));
        }
        setCounter((prev)=>prev+1);
    }
    
    useEffect(()=> {
        rendering();
        if (counter<1) {
            console.log('counter', counter)
                if (fetchingInitiator[1] === 'upcoming') {
                    setDataLoad(upcomingMovieList);
                } else if (fetchingInitiator[1] === 'popular') {
                    setDataLoad(popularMovieList);
                } else if (fetchingInitiator[1] === 'now-showing') {
                    setDataLoad(nowPlayingMovieList);
                } else if (fetchingInitiator[1] === 'top-rated') {
                    setDataLoad(topRatedMovieList);
                }
            
            setCounter(0);
        }


    }, [location.pathname, page, dataLoad, counter])

  return (
    <>  
        <div className={`flex flex-col justify-center items-center ${screenMode==="dark"?"bg-slate-800 text-white":"bg-white text-black"}`}>
            <div id='check'className={`flex flex-row justify-center flex-wrap gap-4 px-2 py-4 `}  >
                { dataLoad?.results?.map((item)=> (
                    <Link key={item.id} onClick={()=>handlerDispatch(item.id)}  to={`${item.title}`}>
                        <div className='w-[150px] cursor-pointer flex flex-col justify-center items-center hover:opacity-60'>
                            <img className='w-[150px]' src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt="img" />
                            {item.title}
                        </div>
                    </Link>
                ))}
                {/* {loadDelay ? (<>
                </>):<>Loading...</>} */}
            </div>
            <div className='flex gap-3 '>
                <button onClick={()=>handlerPageControl("prev")} className="bg-green-500 hover:bg-green-700 text-white text-[1rem] px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-green">
                    Prev
                </button>
                <div className="bg-green-500 text-white text-[1rem] px-3 py-1 rounded-md">
                    Current Page: {page-1}
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