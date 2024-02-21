import React, { useEffect } from 'react'
import useFectch from '../Hooks/useFectch';
import { useParams } from 'react-router-dom';

const PokeIdPage = () => {


  //con el huuk useParams traigo los parametros de la url del componente
  const param= useParams();
  
  const [pokeData, getPokeData]= useFectch();
  
  useEffect(() => {
  const url=`https://pokeapi.co/api/v2/pokemon/${param.id}`;
   getPokeData(url)
  }, [])

 

  console.log(pokeData)
  

  return (
    <article >
    <img src={pokeData?.sprites.other['official-artwork'].front_default} alt="pokemon photo" />
    {pokeData?.name}
  </article>
  )
}

export default PokeIdPage