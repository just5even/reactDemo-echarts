import { Route,Switch,HashRouter as Router} from 'react-router-dom'
import React, { Component } from 'react';
import './App.css';
import Logo from './components/logo/Logo';
import Rightnav from './components/rightnav/Rightnav';
import Leftnav from './components/leftnav/Leftnav';
import Linestack from './components/linestack/Linestack';
import Home from './components/home/Home';
import Bar from './components/bar/Bar'
import Pie from './components/pie/Pie';
import Scatter from './components/scatter/Scatter';
import Candlestick from './components/candlestick/Candlestick';
import Map from './components/map/Map';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Logo></Logo>
          <Rightnav></Rightnav>
          <Leftnav></Leftnav>
          <Switch>
            <Route exact path={'/'} component={Home}/>
            <Route path={'/line'} component={Linestack}/>
            <Route path={'/bar'} component={Bar}/>
            <Route path={'/pie'} component={Pie}/>
            <Route path={'/scatter'} component={Scatter}/>
            <Route path={'/candlestick'} component={Candlestick}/>
            <Route path={'/map'} component={Map}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
