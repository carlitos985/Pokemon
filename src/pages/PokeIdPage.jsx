import React, { useEffect } from 'react'
import useFectch from '../Hooks/useFectch';
import { useParams } from 'react-router-dom';
import './styles/PokeIdPage.css'

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
    <article className='id_contenedor'>
      
        
        <div className={pokeData?.types[0].type.name+'1'}><img className='id_img'src={pokeData?.sprites.other['official-artwork'].front_default} alt="pokemon photo" /></div>
    <div>
       <h1># {pokeData?.id}</h1>
        <div className='id_name'><div className='divider'></div><h2>{pokeData?.name}</h2><div className='divider'></div></div>
        <div className='messure'> 
          <div><h3>Peso </h3>{`${pokeData?.weight} kg`}</div>       
          <div><h4>Altura </h4>{`0.${pokeData?.height} mt`}</div>
        </div>
        
         <div className='t_h'> 
          <div className='type'>
          <div><h2>TIPO</h2></div>       
            <div className='types'>
              {pokeData?.types.map((type, index) => (
              <div className={`id_${type.type.name}1`} key={index}>
              <h4>{type.type.name}</h4>
              </div>
            
              ))}
          </div> 
          </div>
          <div>
            <div><h2>HABILIDADES </h2></div> 
            <div className='hability'>
              {pokeData?.abilities.map((ability, index) => (
              <div className='haility_index'key={index}>
              <h4>{ability.ability.name}</h4>
            </div>
          
              ))}
           </div>

          </div>  

         </div>

      <div className='all_stats'>
        <h2>stats</h2>
        <div className='cont_stat'>
          {pokeData?.stats.map((stat, index) => (
            <div className='stats' key={index}>
              
              <div className='stat' style={{ width: `${stat.base_stat}%` }}>{stat.stat.name} :</div>
              <div className='stat_name' > { `${stat.base_stat}/150`}</div>
              
              
            
            </div>
          
            ))}
            <br />
        </div>
      </div>            
        
      
      
    
    </div>
  </article>
  
  )
  
}

export default PokeIdPage