import React, { Component } from "react";
import './title.css'
 
class Title extends Component {
  render() {
    return (
      <div className='container-fluid'>
          <div className='row'>
            <div class="offset-4 col-4 text-center">
                <h1 className='title'>Dan Hasson</h1>
            </div>  
          </div>
      </div>
    );
  }
}
 
export default Title;