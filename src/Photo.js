import React, { Component } from "react";
import PhotoCarousel from './components/photo-carousel/photo-carousel'
 
class Photo extends Component {
  render() {
    return (
      <div>
        <div className='row'>
          <div className='offset-lg-3 col-lg-6 col-md-12 col-sm-12 text-center'>
        <p>To view more and purchase Dan’s photos visit <a target='_blank' href='
https://www.alamy.com/search/imageresults.aspx?pseudoid=%7b8FBD5CDC-F268-4B5E-884C-B9C87DBE1A8A%7d&name=Dan%2bHasson&st=11&mode=0&comp=1'>Alamy</a>
        </p>
        </div>
        </div>
          <PhotoCarousel />
      </div>
    );
  }
}
 
export default Photo;