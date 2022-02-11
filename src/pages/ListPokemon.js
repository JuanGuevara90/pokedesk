import { useContext,useEffect,useState } from "react";
import {SearchContext} from '../context/SearchContext';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import useFetch from "../service/useFetch";
import SelectedPokemon from './SelectedPokemon';

import DetailPokemon from './DetailPokemon';

const LisPokemon = () => {

    
    const {value} = useContext(SearchContext);
    console.log("<"+value+">");

    const [op,setOp] = useState(value);
    
    const {data:pokemons,pendiente,error} = useFetch('https://pokeapi.co/api/v2/pokemon/'+op);
    useEffect(()=>{
        setOp(value);
    },[value,pokemons]);

    return ( 
        <div className="pokemon-list">
            {pendiente && <div>Cargando...</div>}
            
            <Box >
                <Grid container rowSpacing={0} justifyContent="center" alignItems="center" >
                    
                    {op==="" && pokemons  ?
                        pokemons && pokemons.results.map((pokemon) => 
                        (  
                            <div key={pokemon.name}>
                                <Grid item xs={20} md={20}>
                                    <SelectedPokemon name={pokemon.name}/>
                                </Grid>
                            </div>
                        )) : 
                        pokemons && pokemons.sprites (
                            <div>
                                <p>{op}</p>
                                <p>{pokemons.name}</p>
                                {/* <DetailPokemon feactures={pokemons}/> */}
                             {/*    <img src={pokemons.sprites.other.home.front_default} alt="pokemon"/> */}
                                
                            </div>
                        )
                    }
                    
                </Grid>
            </Box>
        </div>
    );
}
export default LisPokemon;