import React from 'react'
import './card.css'
export default function card({ text, classes, image, pera, btn }) {
    return (
        <div className={`card ${classes}`}>
            <div className="image">
                <img src={image} alt={image} />
            </div>
            <div className="text">
                {text}
            </div>
            <div className="pera">
                {pera}
            </div>
            <div>
                <button className="btn">Learn More</button>
            </div>

        </div>
    )
}