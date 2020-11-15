import React, { Component } from "react";
import './contact-form.css'

class ContactForm extends Component {
  render() {
    return (
        <form id="contact-form" name="contact-form" action="https://formspree.io/f/xbjpkywk" method="POST">

        <div class="row">
        <div class="col-md-12">
                    <div class="md-form mb-0">
                        <input type="text" id="_replyto" name="_replyto" class="form-control" />
                        <label for="_replyto" class="">Your email</label>
                    </div>
                </div>
                </div>

        <div class="row">
        <div class="col-md-12">
        <div class="md-form">
                <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                <label for="message">Your message</label>
            </div>
        </div>
        </div>

        {/* <div class="text-center">
        <div class="col-md-12">
            <div class="md-form mb-0">
                <a class="btn btn-light" onclick="document.getElementById('contact-form').submit();">Send</a>
            </div>
        </div>
        </div> */}

        <button className='button-contact' type="submit">Send</button>        

        </form>

    );
  }
}
 
export default ContactForm;