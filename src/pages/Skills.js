import React from 'react'
import Grid from '../components/Grid'
import '../App.css'
import H1 from '../components/H1'

let CV = require("../components/img/cv1.png")

const Skills = () => {

  return(
    <> 
        <H1>Compétences<span className='point-bis'>.</span></H1>
            <Grid>
                <section class="skills flex flex-wrap flex-row gap-[200px]">
                    <article>
                        <ul>
                            <li>    
                                <p>HTML/CSS</p>
                                <progress value="90" max="100"></progress>
                            </li>
                            <li>
                                <p>Photoshop</p>
                                <progress value="80" max="100"></progress>
                            </li>
                            <li>
                                <p>Javascript</p>
                                <progress value="80" max="100"></progress>
                            </li>
                            <li>
                                <p>React JS</p>
                                <progress value="75" max="100"></progress>
                            </li>
                            <li>
                                <p>Node JS</p>
                                <progress value="65" max="100"></progress>
                            </li>
                            <li>
                                <p>Express JS</p>
                                <progress value="65" max="100"></progress>
                            </li>
                            <li>
                                <p>SQL</p>
                                <progress value="55" max="100"></progress>
                            </li>
                            <li>
                                <p>Redux JS</p>
                                <progress value="40" max="100"></progress>
                            </li>
                        </ul>
                    </article>
                    <section class="CV">
                        <article class="telecharger pt-[25px]">
                            <h3>Télécharger mon CV ici<span>&#9660;</span></h3>
                            <a target="_blank" href={CV}><img alt="cv" src={CV}/></a>
                        </article>
                    </section>
                </section>
            </Grid>
    </>
  )
}

export default Skills 