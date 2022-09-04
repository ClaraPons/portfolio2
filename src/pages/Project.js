import React from 'react'
import Grid from '../components/Grid'
import ProjectCards from '../components/ProjectCards'
import '../App.css'
import H1 from '../components/H1'

let Deezer = require("../components/img/deezer.png")
let Todo = require("../components/img/to-do.png")
let Shifumi = require("../components/img/shifumi.png")
let Memory = require("../components/img/memory.png")
let Moovice = require("../components/img/moovice.png")
let Pokemon = require("../components/img/pokemon.png")
let MovieList = require("../components/img/movieList.png")


const Project = () => {

  return(
    <> 
        <H1>Projets<span className='point-bis'>.</span></H1>
        <Grid>
            <ProjectCards user="Pokemon API - React" image={Pokemon} link={'https://tubular-sundae-be2dda.netlify.app/'}/>
            <ProjectCards user="Moovice - React" image={Moovice} link={'https://imaginative-cascaron-e4e24e.netlify.app/'}/>
            <ProjectCards user="Shifumi - React" image={Shifumi} link={'https://clarapons.github.io/shifumi/'}/>
            <ProjectCards user="Memory - React" image={Memory} link={'https://singular-marshmallow-57b4e9.netlify.app/'}/>
            <ProjectCards user="Deezer - HTML/CSS" image={Deezer} link={'https://clarapons.github.io/deezer-v1/'}/>
            <ProjectCards user="To Do - HTML/CSS/JS" image={Todo} link={'https://cfarn.github.io/todolist/'}/>
            <ProjectCards user="Movie List API - React" image={MovieList} link={'https://dynamic-mochi-82b309.netlify.app/'}/>
        </Grid>
    </>
  )
}

export default Project 