import { Switch, Route } from 'react-router-dom';

import ButtonAppBar from '../pages/ButtonAppBar';
import DefaultPage from '../pages/DefaultPage';

const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <ButtonAppBar />
      </Route>
      <Route exact path="/*">
        <DefaultPage />
      </Route>
    </Switch>
  );
};
export default AppRoutes;
