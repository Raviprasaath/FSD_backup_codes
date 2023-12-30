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
import { ErrorBoundary } from 'react-error-boundary';
import { useSelector } from "react-redux"

function MyErrorFallback({ error, resetErrorBoundary }) {
  const { screenMode } = useSelector((state) => state.movieReducer);

  return (
    <div className={`flex h-[80vh] flex-col p-4 justify-center items-center ${screenMode==="dark"?"bg-slate-800 text-white":"bg-white text-black"}`}>
      <h1>Something went wrong</h1>
      <pre>{error.message}</pre>
      <button className="bg-orange-400 px-4 py-1 rounded-lg" onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={ <ErrorBoundary FallbackComponent={MyErrorFallback}> <RootLayout /> </ErrorBoundary> }>
        <Route index element={<ErrorBoundary FallbackComponent={MyErrorFallback}><Homepage /></ErrorBoundary>} />
          <Route path=':name' element={<ErrorBoundary FallbackComponent={MyErrorFallback}><MovieDetailDummyPage /></ErrorBoundary>}>
            <Route index element={<ErrorBoundary FallbackComponent={MyErrorFallback}><MovieCollection /></ErrorBoundary>} />
            <Route path=':page/:id' element={<ErrorBoundary FallbackComponent={MyErrorFallback}><MovieDetailPage /></ErrorBoundary>} />
          </Route>
          <Route path='movie' element={<ErrorBoundary FallbackComponent={MyErrorFallback}><Category /></ErrorBoundary>}>
            <Route path=':id' element={<ErrorBoundary FallbackComponent={MyErrorFallback}><MovieDetailPage /></ErrorBoundary>} />
          </Route>
          <Route path='user-authentication' element={<ErrorBoundary FallbackComponent={MyErrorFallback}><UserPage /></ErrorBoundary>}>
            <Route path='login' element={<ErrorBoundary FallbackComponent={MyErrorFallback}><LoginPage /></ErrorBoundary>} />
            <Route path='signup' element={<ErrorBoundary FallbackComponent={MyErrorFallback}><SignUpPage /></ErrorBoundary>} />
          </Route>
          <Route path='watch-later' element={<ErrorBoundary FallbackComponent={MyErrorFallback}><WatchLater /></ErrorBoundary>} />
      </Route>
    )
  )
  return (<RouterProvider router={router}/>)
}

export default App


/*
Todo
All api work move to Thunk
Search API
page number track

Redux toolkit
thunk middleware
Error boundary
Route 6.4
Suspense
Lazy Loader
Pagination

Node
Express
Mongo DB
Mongoose
JWT

*/