import { BrowserRouter as Router } from 'react-router-dom';
import { PokemonContextProvider } from './context/PokemonContext';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <PokemonContextProvider>
      <Router>
        <AppRoutes />
      </Router>
    </PokemonContextProvider>
  );
}

export default App;
