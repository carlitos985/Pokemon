import React, { useEffect, useRef } from 'react'
import useFectch from '../../Hooks/useFectch';
import { setPokemonName } from '../../store/slices/pokemonName.slice';
import { useDispatch } from 'react-redux';

const SelectType = ({setSelectValue}) => {

    const [types, getTypes]=useFectch();
    const dispatch=useDispatch();

    useEffect(() => {
        const url ='https://pokeapi.co/api/v2/type';
      
        getTypes(url);
    }, [])
    

   // console.log(types)

   const textSelect= useRef();

    const handleChange= ()=>{

        setSelectValue(textSelect.current.value)
        dispatch(setPokemonName(''));
    }

  return (
    <select onChange={handleChange} ref={textSelect}>
        <option value="todoslospokemon">Todos Los Pokemon</option>
        {
            types?.results.map(type=>(
            <option className='options' key={type.url} value={type.url} >
                {type.name}
            </option>
            ))
        }
    </select>
  )
}

export default SelectType