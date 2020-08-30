import React, { Component } from "react";
// import './bio.css'

class Monday extends Component {
  render() {
    return (
      <div>
          <div className='row'>
              <div className='offset-2 col-4 text-center'>
              <div className='img-wrapper'>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/RZhxm58V33E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                
              </div>
              <div className='col-4 text-center'>
                <h2>MONDAY</h2>
                <p>A young man drops in on his estranged older sister, accidentally interfering with her big plans for the day.</p>
                <div className='img-wrapper laurel'>
                    <img
                    className="d-block w-100"
                    src={require("../../assets/photos/OFFICIAL SELECTION - Brighton Rocks Film Festival - 2020.png")}
                    alt="brighton rocks selection"
                    />
                </div>
              </div>
          </div>
          
      </div>
    );
  }
}
 
export default Monday;