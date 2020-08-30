import React, { Component } from "react";
import './bio.css'

class Film extends Component {
  render() {
    return (
      <div>
          <div className='row'>
              <div className='offset-2 col-4 text-center'>
              <div className='img-wrapper'>
                <img
                className='dan-img'
                // src={require("./assets/photos/dan.png")}
                alt="Dan Hasson"
                />
                </div>
              </div>
              <div className='col-4 text-center'>
                <p>Dan is xxxxx.</p>
              </div>
          </div>
          
      </div>
    );
  }
}
 
export default Film;