import React, { Component } from "react";
import {
    NavLink,
  } from "react-router-dom";
 import './navbar.css'

class Navbar extends Component {
  render() {
    return (
        <div className='navbar-wrapper'>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerMain" aria-controls="navbarTogglerMain" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerMain">
                <ul class="navbar-nav mr-auto ml-auto mt-2 mt-lg-0">
                {/* <li class="nav-item active">
                    <a class="nav-link"><NavLink to="/">Home</NavLink></a>
                </li> */}
                <li class="nav-item">
                    <div class="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show"><NavLink to="/">Film</NavLink></div>
                </li>
                <li class="nav-item">
                    <div class="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show"><NavLink to="/photo">Photo</NavLink></div>
                </li>
                <li class="nav-item">
                    <div class="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show"><NavLink to="/contact">Contact</NavLink></div>
                </li>
                </ul>
            </div>
            </nav>
            </div>
            );
        }
    }

export default Navbar