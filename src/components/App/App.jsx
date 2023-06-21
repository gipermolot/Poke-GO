import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Categories from '../Categories/Categories';
import ProductDetails from '../Products/ProductDetails';
import styles from '../../styles/app.module.css'
import { useParams } from 'react-router-dom';

import Products from "../Products/Products";



function App(){
    const [searchValue, setSearchValue] = React.useState('');


    return (

        <Router>
            <Header searchValue={searchValue} setSearchValue={setSearchValue}/>

            <div className={styles.app}>
            <div className={styles.categories}>
            <Categories />
            </div>
            <Routes>

                <Route path="/" element={<Products searchValue={searchValue}/>} />
                <Route path="/products/:category" element={<Products searchValue={searchValue}/>} />

                <Route path="/:name" element={<ProductDetails />} />

            </Routes>
            </div>
            <Footer />
        </Router>

    );
};

export default App;
