
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Room from './pages/Room';
import Main from './pages/Main';
import NotFound from './pages/NotFound';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/room/:id' component={Room} />
        <Route exact path='/' component={Main} />
        <Route   component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
