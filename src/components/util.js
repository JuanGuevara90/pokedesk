const getPokemonIdFromURL = (url) => {
  const urlData = url.split('/');

  return urlData[6];
};

export const buildPokemonUrl = (url) => {
  const pokemonId = getPokemonIdFromURL(url);

  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`;
};
