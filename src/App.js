import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom';
import Detail from './components/Detail/Detail';

function App() {
  return (
    <div className="App">
      <Router>
         <Header/>
         <Switch>
           <Route path="/detail">
             <Detail/>
           </Route>
           <Route path="/">
             <Home/>
           </Route>
         </Switch>
      </Router>
    </div>
  );
}

export default App;
