import React, { Component } from "react";
import {
    NavLink,
  } from "react-router-dom";
import './film-gallery.css'

class FilmGallery extends Component {
  render() {
    return (
    <div class="container film-gallery">
    <div class="row">
        <div class="col-sm">
        <div className='img-wrapper' id="gallery-img">
            <div><NavLink to="/the-final-push">
                <img
                className="d-block w-100"
                src={require("../../assets/photos/THE FINAL PUSH COVER (COMPRESSED).png")}
                alt="THE FINAL PUSH"
                />
                <p className='centered' id="gallery-text"></p>
                </NavLink>
            </div>
                </div>
        </div>
        <div class="col-sm">
        <div className='img-wrapper' id="gallery-img">
            <div><NavLink to="/monday">
                <img
                className="d-block w-100"
                src={require("../../assets/photos/MONDAY POSTER 001.jpg")}
                alt="MONDAY"
                />
                <p className='centered' id="gallery-text"></p>
                </NavLink>
            </div>
                </div>
        </div>
        <div class="col-sm">
        <div className='img-wrapper' id="gallery-img">
            <div><NavLink to="/hive-society-pastel">
                <img
                className="d-block w-100"
                src={require("../../assets/photos/HS@BE POSTER_1.1.1.jpg")}
                alt="HIVE SOCIETY"
                />
                <p className='centered' id="gallery-text"></p>
                </NavLink>
            </div>
                </div>
        </div>
    </div>
    </div>
    );
  }
}

export default FilmGallery