import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './components/Navbar';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './Home';

const App = () => {
  return (
     <>
     <Navbar/>
     <Switch>
       <Route exact path="/" component={Home} />
       <Redirect to="/" />
     </Switch>
     </>
  );
}

export default App;
