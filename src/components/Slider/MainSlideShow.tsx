import React, { useState, useEffect, Fragment } from 'react'
import styles from '../Slider/mainSlideShow.styles.module.scss'
import BtnWatchIcon from '../../assets/images/btn-watch.png'
import { useGetAllTrendingQuery } from './store'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import Loader from '../Loader/Loader'


const MainSlideShow = () => {

    const navigate = useNavigate();

    const { data: allTrendingData, error, isSuccess, isLoading } = useGetAllTrendingQuery({});

    const [trendingData, setTrendingData] = useState<any>([])

    useEffect(() => {
        if (Array.isArray(allTrendingData) && allTrendingData.length > 0) {
            const FinalDataList = allTrendingData.slice(0, 10)
            // const DemoData= allTrendingData.filter(x=>x.rating?.average > 8)
            setTrendingData(FinalDataList)
        }
    }, [allTrendingData])

    const [isSetId, SetId] = useState<number>()

    const [state, setState] = useState(0);

    const trendingList = trendingData[state];



    const Next = () => {
        setState((state + 1) % trendingData.length);
    }
    const Prev = () => {
        const newState = state - 1;
        if (newState < 0) {
            setState(trendingData.length - 1);
        }
        else {
            setState(state - 1);
        }
    }

    const handleClick = (id: number) => {
        SetId(id)
        navigate(`/watchNow/${id}`)
    }

    return (
        <div>
            <div className={styles.sliderDiv}>
                {isSuccess && trendingList &&
                    <Fragment>
                        <div key={trendingList?.id}>
                            <img className={styles.sliderImg} src={trendingList?.image?.original} alt='mainImage' />
                        </div>
                        <div className={styles.textOn_image}>
                            <p className={styles.movieName}> {trendingList?.name} </p>
                            <p className={styles.movieType}>{trendingList?.genres?.join(', ') || "N/A"} | {trendingList?.network?.country?.name}</p>
                            <p className={styles.summary} dangerouslySetInnerHTML={{ __html: trendingList?.summary || "" }}></p>
                            <div className={styles.watchBtnDiv}>
                                <button className={styles.watchNowBtn} onClick={() => handleClick(trendingList?.id)}>
                                    <img className={styles.btnWatchIcon} src={BtnWatchIcon} alt='BtnWatchIcon' />Watch Now
                                </button>
                            </div>
                        </div>
                        <div className={styles.leftBtn}>
                            <span onClick={Prev}>
                                <FontAwesomeIcon icon={faCircleChevronLeft} />
                            </span>
                        </div>
                        <div className={styles.rightBtn}>
                            <span onClick={Next}>
                                <FontAwesomeIcon icon={faCircleChevronRight} />
                            </span>
                        </div>
                    </Fragment>
                }
            </div>
        </div>
    )
}
export default MainSlideShow
