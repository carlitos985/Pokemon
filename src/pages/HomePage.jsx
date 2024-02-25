import React, { useRef } from 'react'
import { setTrainerName } from '../store/slices/trainerName.slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './styles/homePage.css'

export const HomePage = () => {

    

    const dispatch = useDispatch();

    const navigate= useNavigate()

    const textInput=useRef();

    const handleSubmit=(event)=>{
        event.preventDefault();
        dispatch(setTrainerName(textInput.current.value.trim()));
        navigate('pokedex')

    }
    
    
  return (
    <div className='home_container'>
        <figure className='home_image'>
            <img src="./PokeDex.jpg" alt="" />
        </figure>
        <br />
        <h1>¡¡¡ Hola Entrenador !!!</h1>
        <h2>Para poder comezar, dame tu nombre</h2>

        <form>
            <input type="text" ref={textInput}/>
            <button onClick={handleSubmit}> Comenzar </button>
        </form>
        <div className='foot'>
          <div className='foot_red'></div>
          <div className='foot_black'></div>
          <div className='foot_circle'>
            <div className='foot_circle2'>
              <div className='foot_circle3'></div>  
            </div>             
              
          </div>
        </div>
    </div>
  )
}
