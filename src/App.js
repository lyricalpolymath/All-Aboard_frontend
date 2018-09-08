import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import DAppetizer from "./DAppetizer";
import NudeChain from "./NudeChain";
import ContainerApp from "./components/ContainerApp";
import NavBar from "./components/NavBar";
import ContainerNav from "./components/ContainerNav";


class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (

      <HashRouter>
      <div>
        <ContainerApp>
          <ContainerNav>
          <NavBar>
                <div><a href="#home">Home</a></div>
                <li><a href="#DAppetizer" ><NavLink to="/DAppetizer">DAppetizer</NavLink></a></li>
                <li><a href="#NudeChain"><NavLink to="/NudeChain">NudeChain</NavLink></a></li>
          </NavBar>
          </ContainerNav>

          <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/home" component={Home}/>
              <Route path="/DAppetizer" component={DAppetizer}/>
              <Route path="/NudeChain" component={NudeChain}/>
          </div>
        </ContainerApp>
      </div>
      </HashRouter>
    );
  }
}

export default App;
