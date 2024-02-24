import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPokemonName } from '../store/slices/pokemonName.slice';
import useFectch from '../Hooks/useFectch';
import PokeCard from '../components/pokedexPage/PokeCard';
import SelectType from '../components/pokedexPage/SelectType';
import './styles/pokedexPage.css'

const PokedeskPage = () => {
  
const [selectValue, setSelectValue] = useState('allPokemons');
  const trainerName= useSelector(store=>store.trainerName);
  const pokemonName= useSelector(store=>store.pokemonNameSlice);
  const dispatch=useDispatch();
  const [pokemons, getPokemons, getPerType ]=useFectch();

  //PAGINACION
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 10;
  

  useEffect(() => {

    if(selectValue==='allPokemons'){

      const url='https://pokeapi.co/api/v2/pokemon/?limit=1300';
      getPokemons(url);
    }else{
      getPerType(selectValue);
    }

    
  }, [selectValue])
  

  const textInput= useRef();

  

  const handleSubmit=(event)=>{
    event.preventDefault();
    dispatch(setPokemonName(textInput.current.value.trim().toLowerCase()));
    textInput.current.value='';

  }


  const cbFilter = () => {
    const filteredPokemons = pokemonName
      ? pokemons?.results.filter((element) => element.name.includes(pokemonName))
      : pokemons?.results;
  
    // Calcula el índice de inicio y fin de la página actual
    const startIndex = (currentPage - 1) * resultsPerPage;
    const endIndex = startIndex + resultsPerPage;
  
    return filteredPokemons?.slice(startIndex, endIndex);
  };
  
  
 // console.log(selectValue)
  
  //const cbFilter=()=>{
    //if(pokemonName){
      //return pokemons?.results.filter(element=>element.name.includes(pokemonName));
    //}else {
      //return pokemons?.results;
    //}
  //}

 // const pokemonParts=cbFilter &&cbFilter .pokemons.slice(0,10)
  
  

  return (
    <div className='pokedex'>

      <div className='head'>
      <div className='img_container'>

        <figure className='poke_image'>
        <img src="src\Images\PokeDex2.png" alt="pokedesx" />

        </figure>
      </div>
        
          <div className='head_red'> </div>
          <div className='head_black'></div>
          <div className='head_circle'>
            <div className='head_circle2'>
              <div className='head_circle3'></div>  
            </div>             
      </div>        
          </div>
      
      <section className='poke_header'>
          <h2><span >Bienvenido {trainerName},</span> aquí podrás encontrar tu pokemon favorito</h2>

          <div>
            <form onSubmit={handleSubmit}>
              <input type="text" ref={textInput}/>
              <button>Buscar</button>
            </form>
            <SelectType          
              setSelectValue={setSelectValue}
            />
          </div>
      </section> 

          

      <section className='poke_container'>
          {/*{
            cbFilter()?.map(poke=>(
              <PokeCard
                key={poke.url}
                url={poke.url}
              />
            ))
          }
        */}


      {cbFilter()?.map((poke) => (
        <PokeCard key={poke.url} url={poke.url} />
      ))}
        </section>

        {/* Botones de paginación */}
    <div className="pagination">
      <button
        onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}
        disabled={currentPage === 1}
      >
        Anterior
      </button>
      <span>Página {currentPage}</span>
      <button
        onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
        disabled={cbFilter()?.length < resultsPerPage}
      >
        Siguiente
      </button>
    </div>
      

    </div>
  )
}

export default PokedeskPage