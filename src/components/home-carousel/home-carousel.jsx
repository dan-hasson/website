import React, { Component } from "react";
import {
    NavLink,
  } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel'
import './home-carousel.css'

class HomeCarousel extends Component {
  render() {
    return (
        <div className='carousel-wrapper'>
        <div className='row'>
        <div className='offset-3 col-6'>
            <Carousel>
            <Carousel.Item>
            <div className='img-wrapper'>
                <img
                className="d-block w-100"
                src={require("../../assets/photos/EU Protesters Outside Downing Street 003.jpg")}
                alt="First slide"
                />
                </div>
                <Carousel.Caption>
                {/* <h3>EU Protesters Outside Downing Street</h3> */}
                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className='img-wrapper'>
                <img
                className="d-block w-100"
                src={require("../../assets/photos/Mum _ Dad 003.jpg")}
                alt="Second slide"
                />
                </div>
                <Carousel.Caption>
                {/* <h3>Mum _ Dad</h3> */}
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <div className='img-wrapper' id="gallery-img">
            <a><NavLink to="/monday">
                <img
                className="d-block w-100"
                src={require("../../assets/photos/MONDAY Thumbnail.jpg")}
                alt="MONDAY"
                />
                <p className='centered' id="gallery-text"></p>
                </NavLink>
            </a>
                </div>
                <Carousel.Caption>
                {/* <h3>MONDAY</h3> */}
                {/* <p>A young man drops in on his estranged older sister, accidentally interfering with her big plans for the day.</p> */}
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <div className='img-wrapper'>
            <img
                className="d-block w-100"
                src={require("../../assets/photos/Fish Head On The Beach.jpg")}
                alt="Third slide"
                />
            </div>
                <Carousel.Caption>
                {/* <h3>Fish Head On The Beach</h3> */}
                {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>

            </div>
            </div>
            </div>
                );
                }
                }

export default HomeCarousel