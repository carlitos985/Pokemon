import { configureStore } from "@reduxjs/toolkit";
import trainerName from './slices/trainerName.slice.js';
import pokemonNameSlice from "./slices/pokemonName.slice.js";

const store=configureStore({
    reducer:{
        trainerName,
        pokemonNameSlice,

    }
});

export default store;