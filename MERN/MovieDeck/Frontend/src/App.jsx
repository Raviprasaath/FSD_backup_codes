import Footer from "./Components/Footer/Footer"
import Homepage from "./Components/Homepage/Homepage"
import MovieDetailPage from "./Components/MovieDetailPage/MovieDetailPage"
import MovieDetailDummyPage from "./Components/MovieDetailDummyPage/MovieDetailDummyPage"
import Category from "./Components/Category/Category"

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import RootLayout from "./Layout/RootLayout"
import MovieCollection from "./Components/MovieCollection/MovieCollection"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element = { <Homepage /> }/>
        <Route path='category' element = { <MovieDetailDummyPage /> }>        
          <Route index element = { <MovieCollection /> }/>
          <Route path=':id' element = { <MovieDetailPage /> }/>
        </Route>
        <Route path='movie' element = { <Category /> }>
          <Route path=':id' element = { <MovieDetailPage /> }/>
        </Route>
      </Route>
    )
  )
  return (<RouterProvider router={router}/>)
}

export default App
