import React, { useRef } from 'react'
import { setTrainerName } from '../store/slices/trainerName.slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

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
    <div>
        <h1>Hola Entrenador</h1>
        <h2>Para poder comezar, dame tu nombre</h2>

        <form>
            <input type="text" ref={textInput}/>
            <button onClick={handleSubmit}>Comenzar</button>
        </form>
    </div>
  )
}
