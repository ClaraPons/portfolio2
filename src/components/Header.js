import { Link } from 'react-router-dom'
import '../App.css';


const Header = () => {
  return (
    <header className='flex flex-wrap justify-between mb-10 py-5 px-10'>
      <Link to='/'>
        <span className='font-semibold text-black nav-clara'>Clara<span className='point'>.</span></span>
      </Link>
      <nav className='header flex items-center gap-20'>
        <Link to={"/projects"} className='font-semibold rounded px-3.5 py-1.5 hover-nav'>
          Projets
        </Link>
        <Link to={"/skills"} className='font-semibold rounded px-3.5 py-1.5 hover-nav'>
          Compétences/CV
        </Link>
        <Link to={"/contact"} className='contact'>
          Contact
        </Link>
      </nav>
    </header>
  )
}

export default Header