import React from "react";
import { ExternalLink } from 'react-external-link';
import '../App.css'
let Logo = require("./img/photo.jpg")




const ProjectCards = ({user, image, link}) => {
    return (
        <>
        <div className='card drop-shadow-2xl'>
            <div className='card-bis'>
                <img className='affiche' src={image} alt=""/>
                <div className="text-popular">
                    <h2 className='title-movie'>{user}</h2>
                    <ExternalLink href={link}>
                        <button className='button-popular' >Découvrir</button>
                    </ExternalLink>                
                </div>
            </div>
        </div>

        </>
    )
}

export default ProjectCards