import React, { useState } from 'react'

const SearchPage = () => {

    const [searchResult, setSearchResult] = useState([]);

    const searchApi = async() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTQxNzBjNjQ3MjRkMDIyZTkyOTZhNWZhOTg2NDRlYiIsInN1YiI6IjY0OTAyNGE5MjYzNDYyMDBhZTFjZGI1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7il3x7f91baELU8ceqe8OYauvsHEJ-lC34vS3Gslqoc'
            }
        }
            
        const response = await fetch('https://api.themoviedb.org/3/search/movie?query=amer&include_adult=false&language=en-US&page=1', options)
        const result = await response.json();
        setSearchResult(result);
    }

    return (
    <>
        Search
    </>
  )
}

export default SearchPage
