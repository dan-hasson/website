import React, { Component } from "react";
import './bio.css'
import ContactForm from './components/contact-form/contact-form'

class Film extends Component {
  render() {
    return (
      <div>
          <div className='row'>
              <div className='offset-lg-2 col-lg-4 col-md-12 col-sm-12 text-center'>
              <div className='img-wrapper'>
                <img
                className='dan-img'
                src={require("./assets/photos/biopic.jpg")}
                alt="Dan Hasson"
                />
                </div>
              </div>
              <div className='col-lg-4 col-md-12 col-sm-12 text-center'>
                {/* <p className='contact'>@: <a href="mailto:danchasson@hotmail.com">danchasson@hotmail.com</a></p */}
                <ContactForm />
              </div>
          </div>
          
      </div>
    );
  }
}
 
export default Film;