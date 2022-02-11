import Box from '@mui/material/Box';

import Navbar from '../components/NavBar';
import PokemonList from '../components/PokemonList';

function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Navbar />
      <PokemonList />
    </Box>
  );
}

export default ButtonAppBar;
