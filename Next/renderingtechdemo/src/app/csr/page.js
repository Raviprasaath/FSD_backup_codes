'use client'

import React, { useEffect, useState } from 'react'



const CSRPage = () => {
    const [todo, setTodo] = useState();
    
    const fetching = async (url) => {
        const response = await fetch(url);
        const jsonResponse = await response.json();
        setTodo(jsonResponse);
    }
    console.log('rendering check');
    
    const url = 'https://jsonplaceholder.typicode.com/todos';
    useEffect(()=> {
        fetching(url);
    }, [])
    return (
        <div>
            {!todo ? (<h3>Loading...</h3>):(
                todo.map((item)=> (
                    <p key={item.id}>{item.title}</p>
                ))
            )}
        </div>
    )
}

export default CSRPage
