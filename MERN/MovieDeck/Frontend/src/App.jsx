import Footer from "./Components/Footer/Footer"
import Homepage from "./Components/Homepage/Homepage"
import MovieDetailPage from "./Components/MovieDetailPage/MovieDetailPage"
import MovieDetailDummyPage from "./Components/MovieDetailDummyPage/MovieDetailDummyPage"
import Category from "./Components/Category/Category"

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import RootLayout from "./Layout/RootLayout"
import MovieCollection from "./Components/MovieCollection/MovieCollection"
import UserPage from "./Components/UserAuthentication/UserPage"
import SignUpPage from "./Components/UserAuthentication/SignupPage"
import LoginPage from "./Components/UserAuthentication/LoginPage"
import WatchLater from "./Components/WatchLater/WatchLater"


function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element = { <Homepage /> }/>
        <Route path=':name' element = { <MovieDetailDummyPage /> }>        
          <Route index element = { <MovieCollection /> }/>
          <Route path=':id' element = { <MovieDetailPage /> }/>
        </Route>
        <Route path='movie' element = { <Category /> }>
          <Route path=':id' element = { <MovieDetailPage /> }/>
        </Route>
        <Route path='user-authentication' element={ <UserPage /> } >
          <Route path='login' element = { <LoginPage /> }/>
          <Route path='signup' element = { <SignUpPage /> }/>
        </Route>
        <Route path='watch-later' element={ <WatchLater /> }/>
      </Route>
    )
  )
  return (<RouterProvider router={router}/>)
}

export default App
