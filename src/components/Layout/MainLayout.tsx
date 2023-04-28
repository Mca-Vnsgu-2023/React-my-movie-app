import React from 'react'
import  MainSlideShow  from '../Slider/MainSlideShow'
import Header from '../Header/Header'


const MainLayout = () => {
  return (
    <div className='container'> 
        <div className='row'>
            <div className='col-2'>
                <Header />
            </div>
           <div className='col-10'>
                <MainSlideShow />
           </div>
        </div>
    </div>
  )
}
export default MainLayout
