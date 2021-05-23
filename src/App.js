import React from 'react';
import './App.css';
import Counter from  './component/counter';
import About from './component/about';
import Gallery from './component/Gallery';
import HitDetails from './component/HitDetails'
import {Route, Switch, Link, BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
        <nav className="navbar navbar-expand navbar-brand m-2" >
            <ul className="navbar-nav">
                <li>
                    <Link to="/home" className="nav-link">Home</Link>
                </li>
                <li>
                    <Link to="/counter" className="nav-link">counter</Link>
                </li>
                <li>
                    <Link to="/about" className="nav-link">about</Link>
                </li>
                <li>
                    <Link to="/gallery" className="nav-link">gallery</Link>
                </li>
            </ul>
        </nav>
        <div className="m-4">
            <Switch>
                <Route path="/counter" component={Counter}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/Gallery" component={Gallery}></Route>
                <Route path="/HitDetails/:id" component={HitDetails}></Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
