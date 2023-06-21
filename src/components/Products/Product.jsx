import React from 'react';
import styles from '../../styles/Product.module.css';

import { useNavigate} from "react-router-dom";

const Product = ({ pokemon, loading,infoPokemon }) => {
    let history = useNavigate ();

    return (
        <>
            {
                loading ? <h1>Loading...</h1> :
                    pokemon.map((item) => {
                        return (

                                    <div className={styles.product} key={item.id} onClick={()=>{infoPokemon(item); history(`/${item.name}`)}}>
                                        <img src={item.sprites.front_default} className={styles.image} alt="" />
                                        <h2 className={styles.name}>{item.name}</h2>
                                    </div>

                        )
                    })
            }
        </>
    );
};

export default Product;
