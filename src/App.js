import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Login, Header, Home } from './components';
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
