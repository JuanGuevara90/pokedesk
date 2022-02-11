import { createContext, useContext, useState } from 'react';

export const PokemonContext = createContext();

export const PokemonContextProvider = ({ children }) => {
  const [pokeData, setPokeData] = useState([]);
  const [searchInfo, setSearchInfo] = useState('');

  const setPokemonListHandler = (data) => setPokeData(data);

  const context = {
    pokemonList: pokeData,
    searchInfo,
    setPokemonList: setPokemonListHandler,
    setSearchInfo,
  };

  return <PokemonContext.Provider value={context}>{children}</PokemonContext.Provider>;
};

export const usePokemonContext = () => useContext(PokemonContext);
