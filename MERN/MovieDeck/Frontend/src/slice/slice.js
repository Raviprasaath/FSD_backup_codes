import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    screenMode: "dark",
    isLoading: false,
    error: "",
    nowPlayingMovieList: [],
    popularMovieList: [],
    upcomingMovieList: [],
    topRatedMovieList: [],
    singleMovieFetch: [],
    trailerLink: '',
}

const BASE_URL = 'https://api.themoviedb.org/3/movie/'

const API_KEY = '494170c64724d022e9296a5fa98644eb';
const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTQxNzBjNjQ3MjRkMDIyZTkyOTZhNWZhOTg2NDRlYiIsInN1YiI6IjY0OTAyNGE5MjYzNDYyMDBhZTFjZGI1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7il3x7f91baELU8ceqe8OYauvsHEJ-lC34vS3Gslqoc'

const createMovieAsyncThunk = (name, type) => {
    return createAsyncThunk(
      `moviesList/${name}`,
      async ({ page }, { rejectWithValue }) => {
        const option = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_TOKEN}`,
          },
        };
        const pageNo = page || page.page;
        const url = `${BASE_URL}${type}?language=en-US&page=${pageNo}`
        try {
          const response = await fetch(url, option);
  
          if (response.ok) {
            const result = await response.json();
            return result;
          } else {
            return rejectWithValue({ error: 'Movie Fetching Fails' });
          }
        } catch (error) {
          return rejectWithValue({ error: 'An error occurred during the fetch' });
        }
      }
    );
};

export const getNowPlaying = createMovieAsyncThunk('getNowPlaying', 'now_playing');
export const getPopular = createMovieAsyncThunk('getPopular', 'popular');
export const getUpcoming = createMovieAsyncThunk('getUpcoming', 'upcoming');
export const getTopRated = createMovieAsyncThunk('getTopRated', 'top_rated');

export const getSingleMovie = createAsyncThunk(
    'moviesList/getSingleMovie',
    async ({id}, {rejectWithValue}) => {
        const option = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${API_TOKEN}`
            }
        }
        const url = `${BASE_URL}${id}?language=en-US`
        try{
            const response = await fetch(url, option);
            if (response.ok) {
                const result = await response.json();
                return result;
            } else {
                return rejectWithValue({error: 'Movie Fetching Fails'})
            }
        } catch (e) {
            console.log(e)
        }
    }
)
export const getTrailerOut = createAsyncThunk(
    'moviesList/getTrailerOut',
    async ({id}, {rejectWithValue}) => {
        const option = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${API_TOKEN}`
            }
        }
        const url = `${BASE_URL}${id}/videos?language=en-US`
        try{
            const response = await fetch(url, option);
            if (response.ok) {
                const result = await response.json();
                return result;
            } else {
                return rejectWithValue({error: 'Movie Fetching Fails'})
            }
        } catch (e) {
            console.log(e)
        }
    }
)

const movieSlices = createSlice({
    name: "movieSlice",
    initialState,
    reducers: {
        screenModeToggler: (state, action) => {
            action.payload === "light" ? state.screenMode = "dark": state.screenMode = "light";
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getNowPlaying.pending, (state)=> {
            state.isLoading = true
        })
        .addCase(getNowPlaying.fulfilled, (state, action)=> {
            state.isLoading = false,
            state.nowPlayingMovieList = action.payload,
            state.error = ''
        })
        .addCase(getNowPlaying.rejected, (state, action)=> {
            state.isLoading = false,
            state.error = action.payload.error
        })

        .addCase(getPopular.pending, (state)=> {
            state.isLoading = true
        })
        .addCase(getPopular.fulfilled, (state, action)=> {
            state.isLoading = false,
            state.popularMovieList = action.payload,
            state.error = ''
        })
        .addCase(getPopular.rejected, (state, action)=> {
            state.isLoading = false,
            state.error = action.payload.error
        })

        .addCase(getTopRated.pending, (state)=> {
            state.isLoading = true
        })
        .addCase(getTopRated.fulfilled, (state, action)=> {
            state.isLoading = false,
            state.topRatedMovieList = action.payload,
            state.error = ''
        })
        .addCase(getTopRated.rejected, (state, action)=> {
            state.isLoading = false,
            state.error = action.payload.error
        })

        .addCase(getUpcoming.pending, (state)=> {
            state.isLoading = true
        })
        .addCase(getUpcoming.fulfilled, (state, action)=> {
            state.isLoading = false,
            state.upcomingMovieList = action.payload,
            state.error = ''
        })
        .addCase(getUpcoming.rejected, (state, action)=> {
            state.isLoading = false,
            state.error = action.payload.error
        })

        .addCase(getSingleMovie.pending, (state)=> {
            state.isLoading = true
        })
        .addCase(getSingleMovie.fulfilled, (state, action)=> {
            state.isLoading = false,
            state.singleMovieFetch = action.payload,
            state.error = ''
        })
        .addCase(getSingleMovie.rejected, (state, action)=> {
            state.isLoading = false,
            state.error = action.payload.error
        })
        
        .addCase(getTrailerOut.pending, (state)=> {
            state.isLoading = true
        })
        .addCase(getTrailerOut.fulfilled, (state, action)=> {
            state.isLoading = false,
            state.trailerLink = action.payload,
            state.error = ''
        })
        .addCase(getTrailerOut.rejected, (state, action)=> {
            state.isLoading = false,
            state.error = action.payload.error
        })
    }
})

export const { screenModeToggler } = movieSlices.actions;
export default movieSlices.reducer;