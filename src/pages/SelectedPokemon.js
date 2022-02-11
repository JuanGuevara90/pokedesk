
import useFetch from "../service/useFetch";
import {useState} from 'react';

import DetailPokemon from './DetailPokemon';

const SelectedPokemon = ({name}) => {
    const {data: feactures} = useFetch('https://pokeapi.co/api/v2/pokemon/'+name+'/');
    return ( 
        <div className="selected-pokemon">
            <DetailPokemon feactures={feactures}/>
        </div>
    );
}
export default SelectedPokemon;