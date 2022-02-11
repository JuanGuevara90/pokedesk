import {useState ,useEffect} from 'react';
import {SearchContext} from '../context/SearchContext';
import {DataPokemonContext} from '../context/DataPokemonContext';
import {Switch, Route } from 'react-router-dom';

import useFetch from "../service/useFetch";

import ButtonAppBar from './ButtonAppBar';
import ListPokemon from './ListPokemon';
import DefaultPage from './DefaultPage';


const ContentApp = () => {
    const [value, setValue] = useState("");
    const {data:pokemons,pendiente,error} = useFetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200');
    const [list, setList] = useState({});

    useEffect(() =>
    {
        setList({pokemons,pendiente,error});
    },[pokemons])
    return ( 
        <div>  
            <Switch>                
                <Route exact path="/">
                    <DataPokemonContext.Provider value={{list, setList}}>
                    <SearchContext.Provider value={{value,setValue}}>
                        <ButtonAppBar />
                       {/*  <ListPokemon /> */}
                    </SearchContext.Provider>
                    </DataPokemonContext.Provider>
                </Route>
                <Route exact path="/*">
                    <DefaultPage />
                </Route>
            </Switch>
        </div>
    );
}
export default ContentApp;