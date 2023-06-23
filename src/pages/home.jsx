import React from "react";
import globe from '../assets/globe.png'
import landingpic1 from '../assets/landingpic1.png'
import headerpic from '../assets/headerpic.png'

import './home.css'
import { About } from "../components/about/about";


export const Home = ()=>{
    return (
        <div>
            <div className="homeContainer">
                <div className="headerText">
                    <h1>The future of currency exchange is here.</h1>
                    <p>Currency exchange: We offer a wide range of currency pairs, including XAF/USD, XAF/EUR, and USD/EUR. We also offer spot and forward exchange rates.</p>
                    <div className="headBtn">
                        <button>start now</button>
                        <button>about us</button>
                    </div>
                </div>
                <div className="homeImg">
                    <img src={headerpic} alt="" />
                </div>
            </div>
            <About />

        </div>
    )
}