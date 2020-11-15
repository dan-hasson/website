import React, { Component } from "react";
// import './bio.css'

class HiveSocietyPastel extends Component {
  render() {
    return (
      <div>
          <div className='row'>
              <div className='offset-2 col-4 text-center'>
              <div className='img-wrapper'>
            <iframe title='hive-society-yt' width="100%" height="315" src="https://www.youtube.com/embed/LYnbhlT3llw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
              </div>
              <div className='col-4 text-center'>
                <h2>Hive Society - Pastel Pink (Live Session)</h2>
                <p>A live recording of Hive Society's song, 'Pastel Pink'.</p>
              </div>
          </div>
          
      </div>
    );
  }
}
 
export default HiveSocietyPastel;