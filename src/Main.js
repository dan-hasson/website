import React, { Component } from "react";
import {
  Route,
  HashRouter
} from "react-router-dom";
// import Home from "./Home";
import Film from "./Film";
import Photo from "./Photo";
import Bio from "./Bio";
import TheFinalPush from "./components/film-pages/the-final-push";
import Monday from "./components/film-pages/monday";
import HiveSocietyPastel from "./components/film-pages/hive-society-pastel";
import Title from './components/title/title'
import Navbar from './components/navbar/navbar'
 
class Main extends Component {
    render() {
      return (
          <div className='main'>
        <HashRouter>
          <div>
              <div className='row'>
                  <div className='offset-3 col-6 text-center'>
                    <Navbar />
                    </div>
              </div>
            
          <Title />
          <div className="content">
                <Route exact path="/" component={Film}/>
                <Route path="/film" component={Film}/>
                <Route path="/photo" component={Photo}/>
                <Route path="/contact" component={Bio}/>
                <Route path="/the-final-push" component={TheFinalPush}/>
                <Route path="/monday" component={Monday}/>
                <Route path="/hive-society-pastel" component={HiveSocietyPastel}/>
          </div>
          </div>
        </HashRouter>
        </div>
      );
    }
  }
 
export default Main;