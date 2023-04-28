import React from 'react'
import  MainLayout  from '../../components/Layout/MainLayout'
import styles from './dashBoard.styles.module.scss'
import ShowCard from '../../components/ShowCard/ShowCard'
import TopRatingShow from '../../components/TopRatingShow/TopRatingShow'

const DashBoard = () => {
  return (
    <div className={styles.mainDiv}>
        <MainLayout />
       <div style={{ paddingTop: "544px"}}>
          <ShowCard />
        </div> 
        <div>
          <TopRatingShow />
        </div>
    </div>
  )
}

export default DashBoard