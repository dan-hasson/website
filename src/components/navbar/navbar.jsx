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
                <li class="nav-item active">
                    <a class="nav-link"><NavLink to="/">Home</NavLink></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link"><NavLink to="/film">Film</NavLink></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link"><NavLink to="/photo">Photo</NavLink></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link"><NavLink to="/Bio">Bio</NavLink></a>
                </li>
                <li class="nav-item">
                    <a href="mailto:danchasson@hotmail.com" class="nav-link">Contact</a>
                </li>
                </ul>
            </div>
            </nav>
            </div>
            );
        }
    }

export default Navbar