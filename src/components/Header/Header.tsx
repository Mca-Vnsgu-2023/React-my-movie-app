import React from 'react'
import styles from '../Header/header.styles.module.scss'
import Nav from 'react-bootstrap/Nav'
import IndiLogo from '../../assets/images/indi-logo.png'
import SearchLogo from '../../assets/images/search.png'
import MovieLogo from '../../assets/images/movie.png'
import StarLogo from '../../assets/images/favourite.png'
import UserLogo from '../../assets/images/user.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className={styles.navBarDiv}>
            <Nav  className={styles.navBarItem} >
                <Link to="/">
                    <img  src={IndiLogo} alt='IndiLogo'/>
                </Link>
                <Link to="/searchMovie">
                    <img src={SearchLogo} alt='SearchLogo' />
                </Link>
                <Link to="/movies">
                    <img src={MovieLogo} alt='MovieLogo'/>
                </Link>
                <Link to="/">
                    <img src={StarLogo} alt='StarLogo'/>
                </Link>
                <Link to="/">
                    <img src={UserLogo} alt='UserLogo'/>
                </Link>
            </Nav>
        </div>
    )
}

export default Header