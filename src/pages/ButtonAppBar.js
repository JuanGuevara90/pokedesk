import {useContext,useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {SearchContext} from '../context/SearchContext';
import {DataPokemonContext} from '../context/DataPokemonContext';

function ButtonAppBar() {
    const { setValue } = useContext(SearchContext);
    const { list, setList } = useContext(DataPokemonContext);
    
    let pokemons={};

    useEffect(() =>{
        if(list!={}){
            pokemons=list.pokemons;
            console.log(list.pokemons);

        }

    },[list]);
    
    const searchPokemon =(e) => {
        const textInput = e.target.value.trim();
        
       
/* 
        if(textInput != ""){
            pokemons.filter(pokemon => 
                pokemon.results===textInput)
            
        }else{
            console.log("No hay nada");
        } */
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    PokeDesk
                </Typography>
                <input type="text" placeholder='search'  onChange={(e)=>searchPokemon(e)}/>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default ButtonAppBar;