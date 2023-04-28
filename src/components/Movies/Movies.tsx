import React from 'react'
import Header from '../Header/Header'
import TopRatingShow from '../TopRatingShow/TopRatingShow'

const Movies = () => {
  return (
    <div>
        <div>
            <Header />
        </div>
        <div style={{backgroundColor: "#232323", paddingTop:"25px"}}>
            <TopRatingShow />
        </div>
    </div>
  )
}

export default Movies