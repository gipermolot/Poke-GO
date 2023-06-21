import React from "react";
import axios from "axios";

import { useState } from "react";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';

import styles from '../../styles/Products.module.css';
import Product from "./Product";


const Products = ({ searchValue }) => {
    const [pokeData,setPokeData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [url,setUrl]=useState("https://pokeapi.co/api/v2/pokemon/")
    const [nextUrl,setNextUrl]=useState();
    const [prevUrl,setPrevUrl]=useState();
    const [pokeDex,setPokeDex]=useState();
    let {category} = useParams();
    


    const handlePrevClick = () => {
        setPokeData([]);
        setUrl(prevUrl);
      };
    
      const handleNextClick = () => {
        setPokeData([]);
        setUrl(nextUrl);
      };


    const pokeFun=async()=>{
        setLoading(true)
        let limite = 2000;
        if (category){
            limite= 2000;

        }   else {
            limite= 2000;
        }
        let res=await axios.get(url, { params: { limit: limite } });
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results)

    }
    const getPokemon = async (res) => {
        const filteredPokemon = [];
        for (const item of res) {
          const result = await axios.get(item.url);
          const types = result.data.types.map((type) => type.type.name);
          if (!category || types.includes(category)) {
            filteredPokemon.push(result.data);
          }
        }
        setPokeData(filteredPokemon.sort((a, b) => a.id - b.id));
        setLoading(false)
      };
    useEffect(()=>{
        pokeFun();
        
    },[url, category, searchValue])

    useEffect(() => {

        if (searchValue){
  
        const filteredData = pokeData.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
            
        );
        setPokeData(filteredData);
    }
    }, [searchValue, pokeData]);


    return(
        loading ? (<h1 >Loading...</h1>):(
        <>
            <div>
                <div className={styles.products}>

                    <Product pokemon={pokeData} loading={loading} infoPokemon={poke=>setPokeDex(poke)}/>

                </div>
            </div>
        </>
    )
    )
};

export default Products;