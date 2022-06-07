import React from 'react'
import './Header.css'

export default () =>{
    return(
        <header>
            <div className="logo">
                CreepyBrasil
            </div>
            <div className="menu">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Creepys</a></li>
                    <li><a href="#">Sobre</a></li>
                </ul>
            </div>
        </header>
    )

};