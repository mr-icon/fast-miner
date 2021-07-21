import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";
import Dashboard from './components/dashboard';
import logIn from './components/logIn';
import signUp from './components/signUp';
import { AuthProvider } from "./components/Auth";


const App = ()=> {
  return ( 
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={logIn} />
          <Route exact path="/signup" component={signUp} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
