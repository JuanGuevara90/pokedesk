import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { usePokemonContext } from '../context/PokemonContext';

const Navbar = () => {
  const { searchInfo, setSearchInfo } = usePokemonContext();

  const searchChangeHandler = (event) => {
    const {
      target: { value },
    } = event;

    setSearchInfo(value);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          PokeDesk
        </Typography>
        <input type="text" placeholder="search" value={searchInfo} onChange={searchChangeHandler} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
