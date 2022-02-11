import React, { useEffect, useState } from 'react';
import useSWR from 'swr';

import fetcher from '../helpers/fetcher';
import { usePokemonContext } from '../context/PokemonContext';
import { buildPokemonUrl } from './util';

import './PokemonList.css';

const PokemonList = () => {
  const { pokemonList, searchInfo, setPokemonList } = usePokemonContext();
  const [pokemon, setPokemon] = useState();
  const { data, error } = useSWR('https://pokeapi.co/api/v2/pokemon?limit=400', fetcher);

  useEffect(() => {
    if (data) {
      const { results } = data;
      setPokemonList(results);
      setPokemon(results);
    }
  }, [data]);

  useEffect(() => {
    if (searchInfo.trim().length === 0) {
      setPokemon(pokemonList);
      return;
    }

    setPokemon(pokemonList.filter(({ name }) => name.includes(searchInfo)));
  }, [searchInfo]);

  if (error) return <div>failed to load data</div>;
  if (!data || !pokemon) return <div>loading...</div>;

  return (
    <div className="list__container">
      {pokemon.map(({ name, url }, index) => (
        <div key={`p-${index + 1}`}>
          <h4>{name}</h4>
          <img className="pokemon__image" src={buildPokemonUrl(url)} alt={`p-${url}`} />
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
