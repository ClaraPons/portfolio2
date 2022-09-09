import React from 'react'
import '../App.css'
import H1 from '../components/H1'

const Project = () => {

  return(
    <> 
        <section class="contact-global">
        <H1>Contact<span className='point-bis'>.</span></H1>
            <section class="contact-columns">
                <article class="contact-box">
                    <ul>
                        <li>
                            <p>Email</p>
                            <div>claragapons@gmail.com<a href="mailto:claragapons@gmail.com"><button type="button">Cliquez-ici</button></a></div>
                        </li>
                        <li>
                            <p>Téléphone</p>
                           <div>06.24.43.65.95<a href="tel:+33624436595"><button type="button">Cliquez-ici</button></a></div> 
                        </li>
                        <li>
                            <p>Linkedin</p>
                            <div>https://www.linkedin.com/in/clara-pons-297bb6b3/<a href="https://www.linkedin.com/in/clara-pons-297bb6b3/"><button type="button">Cliquez-ici</button></a></div>
                        </li>
                    </ul>
                </article>
                <article class="Github">
                    <p>Vous pouvez aussi me retrouver sur GitHub</p>
                    <div>https://github.com/ClaraPons<a href="https://github.com/ClaraPons"><button type="button">Cliquez-ici</button></a></div>
                </article>
            </section>
    </section>
    </>
  )
}

export default Project 