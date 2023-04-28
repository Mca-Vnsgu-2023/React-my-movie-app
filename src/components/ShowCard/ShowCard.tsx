import React, { Fragment, useEffect, useState } from 'react'
import styles from './showCard.styles.module.scss'
import { useGetAllScheduleQuery } from './store';
import { Link } from 'react-router-dom';
import DefaultImg from '../../assets/images/placeholder.png'
import Loader from '../Loader/Loader';

const ShowCard = () => {

    const { data: allScheduleData, error, isSuccess, isLoading } = useGetAllScheduleQuery({});

    const [scheduleData, setScheduleData] = useState<any>([])

    const showRecord = 12

    const [displayLength, setDisplayLength] = useState(12)

    const toggleList = () => {
        if (displayLength === showRecord) {
            setDisplayLength(scheduleData.length)
        }
        else {
            setDisplayLength(showRecord)
        }
    }

    useEffect(() => {
        if (Array.isArray(allScheduleData) && allScheduleData.length > 0) {
            const FinalDataList = allScheduleData
            setScheduleData(FinalDataList)
        }
    }, [allScheduleData])

    return (
        <div className={styles.mainDiv}>
            {isLoading && <Loader />}
            {isSuccess && scheduleData &&
                <Fragment>
                    <div className='row' style={{ fontSize: "20px" }}>
                        <div className='col-8'>
                            <p>Recently Added Films</p>
                        </div>
                        <div className='col-4'>
                            {scheduleData.length > 12 &&
                                <button className={styles.moreCardBtn} onClick={toggleList}>
                                    {displayLength === showRecord ? 'More..' : 'Less..'}
                                </button>
                            }
                        </div>
                    </div>
                    {(Array.isArray(allScheduleData) && allScheduleData.length > 0) ?
                        <>
                            <div className={`${styles.subDiv} col-sm-10`}>
                                {scheduleData.map((item: any, index: any) => {
                                    if (index < displayLength) {
                                        return (
                                            <div key={index} className={styles.imgDiv}>
                                                <Link to={`/watchNow/${item?.show?.id}`} style={{ textDecoration: 'none' }}>
                                                    <img className={styles.imgSize} src={item?.show?.image?.medium || DefaultImg} alt="img" ></img>
                                                    <p className={styles.movieName}>{item?.show?.name}</p>
                                                </Link>
                                            </div>
                                        )
                                    }
                                })}
                            </div>
                        </>
                        : null
                    }
                </Fragment>
            }
        </div>
    )
}

export default ShowCard