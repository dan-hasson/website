import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel'

class FilmCarousel extends Component {
  render() {
    return (
        <div className='row'>
        <div className='offset-3 col-6'>
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={require("../../assets/photos/midlight.jpg")}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={require("../../assets/photos/test.jpg")}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={require("../../assets/photos/midlight.jpg")}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>

            </div>
            </div>
                );
                }
                }

export default FilmCarousel