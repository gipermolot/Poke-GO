import { useParams } from "react-router-dom";
import React,{useEffect,useState} from 'react'
import Axios from 'axios'
import styles from '../../styles/ProductDetails.module.css';


function ProductDetails(){
    let {name} = useParams();
    const [info,setInfo]=useState({});

    useEffect(()=>{
        Axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((data)=>{
        console.log(name)
        setInfo({
            id: data.data.id,
            abilities: data.data.abilities,
            stats: data.data.stats,
            types: data.data.types
        });
    });

},[name]);
return(
    <div className={styles.productDetails}>
        <div className={styles.leftcontent}>
        <img className={styles.image} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${info.id}.svg`} alt="" />
        <h3 className={styles.name}>{name}</h3>
        </div>
        <div className={styles.rightcontent}>

        {info.types && info.types.map(pokeTyp => (
            <div  key={pokeTyp.type.name}>
                <h2 className={styles.nretreat}>Type: {pokeTyp.type.name}</h2>
            </div>
        ))}

        {info.stats && info.stats.map(pokeStat => (
            <div  key={pokeStat.stat.name}>
                <h3>{pokeStat.stat.name}: {pokeStat.base_stat}</h3>
            </div>
        ))}

        {info.abilities ? (
        info.abilities.map(poke=>{
            return(
                <>
                     <div>
                        <h3 className={styles.retreat}> Ability:  {poke.ability.name} </h3>
                     </div>
                </>
            )
        })
        ) : (
                <p>Loading...</p>
            )}
        </div>
    </div>
);
}
export default ProductDetails;