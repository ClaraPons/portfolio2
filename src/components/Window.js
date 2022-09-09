import React from 'react'
import '../App.css'
// eslint-disable-next-line
let Picture = require("./img/photo3.png")

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
            <img alt="" className='w-[380px] rounded' src={Picture}/>
        </article>
    </section>
    </>
  )
}

export default Window 