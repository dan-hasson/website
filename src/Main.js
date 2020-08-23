import React, { Component } from "react";
import {
  Route,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Film from "./Film";
import Photo from "./Photo";
import Bio from "./Bio";
import Title from './components/title/title'
import Navbar from './components/navbar/navbar'
 
class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div>
              <div className='row'>
                  <div className='offset-3 col-6 text-center'>
                    <Navbar />
                    </div>
              </div>
            
          <Title />
          <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/film" component={Film}/>
                <Route path="/photo" component={Photo}/>
                <Route path="/bio" component={Bio}/>
          </div>
          </div>
        </HashRouter>
      );
    }
  }
 
export default Main;