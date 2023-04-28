import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashBoard from '../pages/Dashboard/DashBoard'
import WatchNowShow from '../components/WatchNowShow/WatchNowShow'
import Movies from '../components/Movies/Movies'
import SearchMovies from '../components/SearchMovies/SearchMovies'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<DashBoard />}></Route>
            <Route path='/searchMovie' element={<SearchMovies />}></Route>
            <Route path='/movies' element={<Movies />}></Route>
            <Route path='/watchNow/:id' element={<WatchNowShow />} />
        </Routes>
    </div>
  )
}

export default MainRoutes