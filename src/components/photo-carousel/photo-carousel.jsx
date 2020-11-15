import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel'
import './photo-carousel.css'

class PhotoCarousel extends Component {
  render() {
    return (
        <div className='carousel-wrapper'>
        <div className='row'>
        <div className='offset-lg-3 col-lg-6 col-md-12 col-sm-12'>
            <Carousel>
            <Carousel.Item>
            <div className='img-wrapper'>
                <img
                className="d-block w-100"
                src={require("../../assets/photos/0. People Arrive Outside Gate A.jpg")}
                alt="First slide"
                />
                </div>
                <Carousel.Caption>
                {/* <h3 className='photo'>People Arrive Outside Gate A</h3> */}
                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className='img-wrapper'>
                <img
                className="d-block w-100"
                src={require("../../assets/photos/11. George Ireland.jpg")}
                alt="Second slide"
                />
                </div>
                <Carousel.Caption>
                {/* <h3 className='photo'>George Ireland</h3> */}
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <div className='img-wrapper'>
            <img
                className="d-block w-100"
                src={require("../../assets/photos/11. Liam Miknas.jpg")}
                alt="Third slide"
                />
            </div>
                <Carousel.Caption>
                {/* <h3 className='photo'>Liam Miknas</h3> */}
                {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <div className='img-wrapper'>
            <img
                className="d-block w-100"
                src={require("../../assets/photos/BBQ Remains 002.jpg")}
                alt="Third slide"
                />
            </div>
                <Carousel.Caption>
                {/* <h3 className='photo'>BBQ Remains</h3> */}
                {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <div className='img-wrapper'>
            <img
                className="d-block w-100"
                src={require("../../assets/photos/BHAFC V Bournemouth 007-2.jpg")}
                alt="Third slide"
                />
            </div>
                <Carousel.Caption>
                {/* <h3 className='photo'>BHAFC V Bournemouth</h3> */}
                {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <div className='img-wrapper'>
            <img
                className="d-block w-100"
                src={require("../../assets/photos/Extinction Rebellion On Victoria Street 008.jpg")}
                alt="Third slide"
                />
            </div>
                <Carousel.Caption>
                {/* <h3 className='photo'>BHAFC V West Ham</h3> */}
                {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <div className='img-wrapper'>
            <img
                className="d-block w-100"
                src={require("../../assets/photos/BHASVIC Field 041.jpg")}
                alt="Third slide"
                />
            </div>
                <Carousel.Caption>
                {/* <h3 className='photo'>BHASVIC Field</h3> */}
                {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <div className='img-wrapper'>
            <img
                className="d-block w-100"
                src={require("../../assets/photos/Brexit Day 046.jpg")}
                alt="Third slide"
                />
            </div>
                <Carousel.Caption>
                {/* <h3 className='photo'>Brexit Day</h3> */}
                {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <div className='img-wrapper'>
            <img
                className="d-block w-100"
                src={require("../../assets/photos/Brighton Beach 006.jpg")}
                alt="Third slide"
                />
            </div>
                <Carousel.Caption>
                {/* <h3 className='photo'>Brighton Beach</h3> */}
                {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <div className='img-wrapper'>
            <img
                className="d-block w-100"
                src={require("../../assets/photos/Brighton Beach Sunset 029.jpg")}
                alt="Third slide"
                />
            </div>
                <Carousel.Caption>
                {/* <h3 className='photo'>Brighton Beach Sunset</h3> */}
                {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <div className='img-wrapper'>
            <img
                className="d-block w-100"
                src={require("../../assets/photos/Brighton Sunset From Howard Place 002.jpg")}
                alt="Third slide"
                />
            </div>
                <Carousel.Caption>
                {/* <h3 className='photo'>Brighton Sunset From Howard Place</h3> */}
                {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <div className='img-wrapper'>
            <img
                className="d-block w-100"
                src={require("../../assets/photos/Conor Joyce 004.jpg")}
                alt="Third slide"
                />
            </div>
                <Carousel.Caption>
                {/* <h3 className='photo'>Conor Joyce</h3> */}
                {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <div className='img-wrapper'>
            <img
                className="d-block w-100"
                src={require("../../assets/photos/EU Protesters Outside Downing Street 003.jpg")}
                alt="Third slide"
                />
            </div>
                <Carousel.Caption>
                {/* <h3 className='photo'>EU Protesters Outside Downing Street</h3> */}
                {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
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
                {/* <h3 className='photo'>Fish Head On The Beach</h3> */}
                {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item>
            <div className='img-wrapper'>
            <img
                className="d-block w-100"
                src={require("../../assets/photos/Harry Bridges _ Sam Gledhill 001.jpg")}
                alt="Third slide"
                />
            </div>
                <Carousel.Caption>
                {/* <h3 className='photo'>Harry Bridges _ Sam Gledhill</h3> */}
                {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <div className='img-wrapper'>
            <img
                className="d-block w-100"
                src={require("../../assets/photos/Harry Bridges 23rd Birthday 026.jpg")}
                alt="Third slide"
                />
            </div>
                <Carousel.Caption>
                {/* <h3 className='photo'>Harry Bridges 23rd Birthday</h3> */}
                {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <div className='img-wrapper'>
            <img
                className="d-block w-100"
                src={require("../../assets/photos/Hive Society At Brixton Jamm 122.jpg")}
                alt="Third slide"
                />
            </div>
                <Carousel.Caption>
                {/* <h3 className='photo'>Hive Society At Brixton Jamm</h3> */}
                {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <div className='img-wrapper'>
            <img
                className="d-block w-100"
                src={require("../../assets/photos/Hive Society, Jaspers House 016.jpg")}
                alt="Third slide"
                />
            </div>
                <Carousel.Caption>
                {/* <h3 className='photo'>Hive Society, Jaspers House</h3> */}
                {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item>
            <div className='img-wrapper'>
            <img
                className="d-block w-100"
                src={require("../../assets/photos/Homeless On The Strand 004.jpg")}
                alt="Third slide"
                />
            </div>
                <Carousel.Caption>
                {/* <h3 className='photo'>Homeless On The Strand</h3> */}
                {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <div className='img-wrapper'>
            <img
                className="d-block w-100"
                src={require("../../assets/photos/Man Watching Beach Sunset 005.jpg")}
                alt="Third slide"
                />
            </div>
                <Carousel.Caption>
                {/* <h3 className='photo'>Man Watching Beach Sunset</h3> */}
                {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <div className='img-wrapper'>
            <img
                className="d-block w-100"
                src={require("../../assets/photos/Midlight, The Old Market Gig 032-2.jpg")}
                alt="Third slide"
                />
            </div>
                <Carousel.Caption>
                {/* <h3 className='photo'>Midlight, The Old Market</h3> */}
                {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <div className='img-wrapper'>
            <img
                className="d-block w-100"
                src={require("../../assets/photos/Extinction Rebellion, Xmas March 038.jpg")}
                alt="Third slide"
                />
            </div>
                <Carousel.Caption>
                {/* <h3 className='photo'>Mum _ Dad</h3> */}
                {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <div className='img-wrapper'>
            <img
                className="d-block w-100"
                src={require("../../assets/photos/Parade On Birdcage Walk _ Horse Guards Road 006.jpg")}
                alt="Third slide"
                />
            </div>
                <Carousel.Caption>
                {/* <h3 className='photo'>Parade On Birdcage Walk _ Horse Guards Road</h3> */}
                {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <div className='img-wrapper'>
            <img
                className="d-block w-100"
                src={require("../../assets/photos/Sam Gledhill 051-2.jpg")}
                alt="Third slide"
                />
            </div>
                <Carousel.Caption>
                {/* <h3 className='photo'>Sam Gledhill</h3> */}
                {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <div className='img-wrapper'>
            <img
                className="d-block w-100"
                src={require("../../assets/photos/Sunset From Waterloo Bridge 002.jpg")}
                alt="Third slide"
                />
            </div>
                <Carousel.Caption>
                {/* <h3 className='photo'>St James Park</h3> */}
                {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <div className='img-wrapper'>
            <img
                className="d-block w-100"
                src={require("../../assets/photos/Stanmer Park Trip 002.jpg")}
                alt="Third slide"
                />
            </div>
                <Carousel.Caption>
                {/* <h3 className='photo'>Stanmer Park Trip 002</h3> */}
                {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <div className='img-wrapper'>
            <img
                className="d-block w-100"
                src={require("../../assets/photos/Stanmer Park Trip 042.jpg")}
                alt="Third slide"
                />
            </div>
                <Carousel.Caption>
                {/* <h3 className='photo'>Stanmer Park Trip 042</h3> */}
                {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <div className='img-wrapper'>
            <img
                className="d-block w-100"
                src={require("../../assets/photos/Tabi Moloi, Tom O_Brien, Jasper Harrison _ Rish Saluja 004.jpg")}
                alt="Third slide"
                />
            </div>
                <Carousel.Caption>
                {/* <h3 className='photo'>Tabi Moloi, Tom O_Brien, Jasper Harrison _ Rish Saluja</h3> */}
                {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                </Carousel.Caption>
            </Carousel.Item>

            {/* <Carousel.Item>
            <div className='img-wrapper'>
            <img
                className="d-block w-100"
                src={require("../../assets/photos/WAYMO_ Wrap Party 015.jpg")}
                alt="Third slide"
                />
            </div>
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item> */}

            </Carousel>

            </div>
            </div>
            </div>
                );
                }
                }

export default PhotoCarousel