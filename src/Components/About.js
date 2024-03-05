import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4">
                        Making a fashion collection for the new society these days can be really hard. In fact, designing a collection is way harder than you think. Most people think the opposite. Some people say sketching and sewing are the easiest things to do and some people live for fashion. In fashion, you need to know who is your audience, what trends are in, will people buy your clothing, and why is your collection special than others. Critiques are everywhere and they so judge about the design, fabric, even how the clothing is sowed. We need to care about fashion because we need to know how the design from a single sketch is made. How the fabric transfers to a skirt or a dress. 
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src='/asset/about.png' alt="About Us" height="400px" width="400px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About