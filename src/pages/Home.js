import React from 'react'
import '../App.css'
import MovingComponent from 'react-moving-text'
import Window from '../components/Window'
import Typewriter from 'react-ts-typewriter';
import {Link } from 'react-router-dom'

const Home = () => {
  return(
    <> 
    <section className=" test flex gap-[16%] py-5 ">
      <div className="home flex flex-col w-[780px] pl-[12%] pt-[15px] ">      
          <MovingComponent
          className="hello"
            type="effect3D"
            duration="1000ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="none"
            fillMode="none">
            HELLO
          </MovingComponent>
          <h1 className="description w-[100%] text-lg align-center flex flex-col" >
            <Typewriter text="Je m'appelle Clara Pons, je suis en formation pour devenir développeuse web." loop={true} speed={100}/>
        </h1> 
        <div className='pt-[70px] text-center'> 
          <Link to={"/projects"} className='contact'>
            Découvrez mon portfolio
          </Link>
        </div>
        </div>
        <div className='test flex flex-col gap-10 text-left'>
          <Window/>
        </div>
      </section>   
    </>
  )
}

export default Home