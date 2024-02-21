import React, { useEffect } from 'react'
import useFectch from '../../Hooks/useFectch'
import { useNavigate } from 'react-router-dom';

const PokeCard = ({url}) => {

    const [pokemon, getPokemon]= useFectch();

    const navigate= useNavigate();

    useEffect(() => {
      
      getPokemon(url);
    }, [])

    const handleClick=()=>{
      navigate(`/pokedex/${pokemon.id}`);
    }

    //console.log(pokemon)
    
  return (
    <article onClick={handleClick}>
      <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="pokemon photo" />
      {pokemon?.name}
    </article>
  )
}

export default PokeCard