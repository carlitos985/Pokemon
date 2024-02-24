import axios from "axios";
import { useState } from "react"

const useFectch = () => {

    const [apiData, setApidata]= useState();

    const getApi=(url)=>{
        axios.get(url)
            .then(res=>setApidata(res.data))
            .catch(err=>console.log(err));
    }

    const getApiType=(url)=>{
        axios.get(url)
            .then(res=>{
                setApidata({
                    results: res.data.pokemon.map(poke=>poke.pokemon),
                })
            })
            .catch(err=>console.log(err));
    }

    return [apiData, getApi, getApiType]

}

export default useFectch