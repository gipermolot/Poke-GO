import React, { useState } from 'react';
import styles from '../../styles/Categories.module.css';
import Products from '../Products/Products';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ProductDetails from '../Products/ProductDetails';

const Categories = () => {
    const pokemonTypes = [
        'electric', 'ghost', 'grass', 'water', 'flying', 'fire', 'fairy', 'dragon',
        'fighting', 'normal', 'psychic', 'dark', 'poison', 'steel', 'ground', 'ice', 'rock'
    ];

    const [selectedCategory, setSelectedCategory] = useState('');

    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        navigate(`/products/${category}`);
    };

    return (
        <div className={styles.categoriesContainer}>
            <div className={styles.categories}>
                <h2 className={styles.title}>Pokémon Type</h2>
                <ul className={styles.typeMenu}>
                    {pokemonTypes.map((type, index) => (
                        <li
                            key={index}
                            className={`${styles.typeMenuItem} ${selectedCategory === type ? styles.active : ''}`}
                            onClick={() => handleCategoryClick(type)}
                        >
                            {type}
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
};

export default Categories;
