import React from 'react'
import '../App.css'
let Logo = require("./img/photo3.png")

const Window = () => {
  return(
    <> 
    <section className="play">
        <article className="play-structure">
            <div className="rectangle1 pb-5 text-gray-700 text-right pr-2 pt-1 text-xs">../image</div>
            <div className="circle1"></div>
            <div className="circle2"></div>
        </article>
        <article className="play-contains">
            <img className='w-[380px] rounded' src={Logo}/>
        </article>
    </section>
    </>
  )
}

export default Window 