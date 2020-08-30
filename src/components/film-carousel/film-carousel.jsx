import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel'
import './film-carousel.css'

class FilmCarousel extends Component {
  render() {
    return (
        <div className='carousel-wrapper'>
        <div className='row'>
        <div className='offset-3 col-6'>
            <Carousel>
            <Carousel.Item>
            <div className='img-wrapper'>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/fvNBRMm0QoY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <Carousel.Caption>
                <h3>The Final Push</h3>
                <p>Running up hills should only take you to the top...</p>
                </Carousel.Caption>
            </Carousel.Item>
            
            <Carousel.Item>
                <div className='img-wrapper'>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/RZhxm58V33E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <Carousel.Caption>
                <h3>MONDAY</h3>
                <p>A young man drops in on his estranged older sister, accidentally interfering with her big plans for the day.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <div className='img-wrapper'>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/LYnbhlT3llw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
                <Carousel.Caption>
                <h3>Hive Society - Pastel Pink (Live Session)</h3>
                <p>A live recording of Hive Society's song, 'Pastel Pink'.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>

            </div>
            </div>
            </div>
                );
                }
                }

export default FilmCarousel