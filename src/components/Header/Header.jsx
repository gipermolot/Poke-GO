import React,{useState} from 'react';
import styles from '../../styles/Header.module.css';


import logo from '../../images/logo.svg';


const Header = ({ searchValue, setSearchValue }) => {


    const handleChange = (e) => {
        const value = e.target.value;
        setSearchValue(value);
    };

    return (
        <header className={styles.header}>
            <div className={styles.leftSection}>
                <img src={logo} alt="Логотип" className={styles.logo} />
                <h1 className={styles.companyName}>Pok Go</h1>
            </div>
            <div className={styles.rightSection}>
            <input
                    type="text"
                    placeholder="Find..."
                    className={styles.searchInput}
                    onChange={handleChange}
                />

            </div>
        </header>
    )
    }

export default Header;
