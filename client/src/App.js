// import logo from './logo.svg';
// import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import CreatePokemon from './pages/CreatePokemon';
import ViewPokemon from './pages/ViewPokemon';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Redirect from="/" to="/create" exact />
          <Route path="/create" exact component={CreatePokemon} />
          <Route path="/view" exact component={ViewPokemon} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
