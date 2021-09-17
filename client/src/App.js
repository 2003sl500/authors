import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Dashboard from './views/Dashboard';
import AddNew from './views/AddNew';
import Edit from './views/Edit';

function App() {
  return (
    <div>
      <BrowserRouter>
      <h1>Favorite Authors</h1>
        <Switch>
          <Route exact path = "/">
            <Dashboard />
          </Route>
          <Route exact path = "/new">
            <AddNew />
          </Route>
          <Route exact path = "/edit/:id">
            <Edit />
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
