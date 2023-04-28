import React, { Fragment, useEffect, useState } from 'react'
import { useGetAllSearchQuery } from './store'
import Header from '../Header/Header'
import styles from './searchMovie.styles.module.scss'
import searchIcon from '../../assets/images/search.png'
import DefaultImg from '../../assets/images/placeholder.png'
import { Link } from 'react-router-dom'

const SearchMovies = () => {

    const [inputData, setInputData] = useState("")

    const { data: searchData, isLoading, isSuccess } = useGetAllSearchQuery({ searchValue: inputData })

    const [searchingList, setSearchingList] = useState<any>([])

    const onFormSubmit = (event: any) => {
        event.preventDefault();
        setInputData(inputData)
    }

    useEffect(() => {
        if (inputData && (Array.isArray(searchData) && searchData.length > 0)) {
            setSearchingList(searchData)
        }
    }, [searchData])

    return (
        <div>
            <div>
                <Header />
            </div>
            <div className={styles.mainDiv}>
                <form className='row' onSubmit={onFormSubmit}>
                    <div className='col-xl-6 col-md-6 col-lg-6'>
                        <img src={searchIcon} alt="searchIcon"></img>
                        <input type='text' placeholder='search..' name='inputData' value={inputData} onChange={(e) => setInputData(e.target.value)} />
                    </div>
                </form>

                <div>
                    {isSuccess && searchData &&
                        <Fragment>
                            {(Array.isArray(searchData) && searchData.length > 0) ?
                                <div className={styles.cardDiv}>
                                    {searchingList.map((item: any, index: any) => {
                                        return (
                                            <div key={index} className={styles.imgDiv}>
                                                <Link to={`/showCardDetail/${item?.show?.id}`} style={{ textDecoration: 'none' }}>
                                                    <img src={item?.show?.image?.medium || DefaultImg} className={styles.imgSize} alt="imageCard" />
                                                    <p className={styles.movieName}>{item?.show?.name}</p>
                                                </Link>
                                            </div>
                                        )
                                    })}
                                </div>
                                :
                                null
                            }
                        </Fragment>
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchMovies