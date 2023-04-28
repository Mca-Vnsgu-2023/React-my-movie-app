import React, { Fragment, useState } from 'react'
import Header from '../Header/Header'
import { Link, useNavigate, useParams } from 'react-router-dom'
import styles from './watchNowShow.styles.module.scss'
import { useGetShowsByIdQuery } from './store'
import ShowRating from '../ShowRating/ShowRating'
import ShowInfo from '../ShowCardDetail/ShowInfo/ShowInfo'
import ShowStarCast from '../ShowCardDetail/ShowStarCast/ShowStarCast'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Loader from '../Loader/Loader'



const WatchNowShow = () => {

    const { id } = useParams()
    const showsId = Number(id)

    const { data: showsByIdData, error, isSuccess, isLoading } = useGetShowsByIdQuery({ id: showsId })

    const [LoadingComplete, setLoadingComplete] = useState(true)
    const ImageLoadingComplete = () => {
        setLoadingComplete(false)
    }

    return (
        <div>
            <div>
                <Header />
            </div>
            {isLoading || LoadingComplete && <Loader />}
            {isSuccess && showsByIdData &&
                <Fragment>
                    <div className={styles.mainDiv}>
                        <div className={styles.HomeDiv}>
                            <div>
                                <Link to={'/'} style={{ textDecoration: 'none' }}>
                                    <h3 className={styles.text}>
                                        <FontAwesomeIcon icon={faArrowLeft} /> &nbsp;
                                        Home
                                    </h3>
                                </Link>
                                <div className={styles.imgDiv}>
                                    <img className={styles.originalImg} 
                                        src={showsByIdData?.image?.original}
                                        alt="img" onLoad={ImageLoadingComplete} />
                                </div>
                            </div>
                            <div className={styles.textDiv}>
                                <h1>{showsByIdData?.name}</h1>
                                <p className={styles.textSummary} dangerouslySetInnerHTML={{ __html: showsByIdData?.summary || '' }}></p>
                                <h4>{showsByIdData?.genres?.join(', ') || "N/A"} | Country: {showsByIdData?.network?.country?.name}</h4>

                                <div className={styles.ratingDiv}>
                                    <ShowRating rating={showsByIdData?.rating?.average || 0} shownumber />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row' style={{ paddingLeft: "130px", margin: 0 }}>
                        <div className='col-xl-6 col-md-6 col-lg-6'>
                            <ShowInfo data={showsByIdData} />
                        </div>
                        <div className='col-xl-6 col-md-6 col-lg-6'>
                            {showsByIdData?._embedded &&
                                <ShowStarCast data={showsByIdData?._embedded?.cast} />
                            }
                        </div>
                    </div>
                </Fragment>
            }
        </div>
    )
}

export default WatchNowShow