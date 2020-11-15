import React, { Component } from "react";
// import './bio.css'

class TheFinalPush extends Component {
  render() {
    return (
      <div>
          <div className='row'>
              <div className='offset-lg-2 col-lg-4 col-md-12 col-sm-12 text-center'>
              <div className='img-wrapper'>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/fvNBRMm0QoY" frameborder="0" title="final_push" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                
              </div>
              <div className='col-lg-4 col-md-12 col-sm-12 text-center'>
                <h2>The Final Push</h2>
                <p>Running up hills should only take you to the top...</p>
                <div className='img-wrapper laurel'>
                    <img
                    className="d-block w-100"
                    src={require("../../assets/photos/OFFICIAL SELECTION - The Lift-Off Sessions - 2020.png")}
                    alt="brighton rocks selection"
                    />
                </div>
              </div>
          </div>
          
      </div>
    );
  }
}
 
export default TheFinalPush;