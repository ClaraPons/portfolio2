import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [hidden, setHidden] = useState(true);

    const handleHiddenClick = () => {
        setHidden(!hidden);
    };

    return (
        <nav className="p-5 pb-10 header flex items-center gap-20 justify-between">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <NavLink to={"/"} className="flex items-center">
                    <span className="font-semibold text-center text-black nav-clara">
                        Clara<span className="point">.</span>
                    </span>
                </NavLink>
                <button
                    data-collapse-toggle="navbar-solid-bg"
                    type="button"
                    className="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500"
                    aria-controls="navbar-solid-bg"
                    aria-expanded="false"
                    onClick={handleHiddenClick}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-6 h-6"
                        aria-hidden="true"
                        fill=""
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </button>
                <div
                    className={`${
                        hidden && "hidden"
                    } w-full md:block md:w-auto`}
                    id="navbar-solid-bg"
                >
                    <ul className="flex mt-4 justify-center items-center rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  ">
                        <li onClick={handleHiddenClick} className="font-semibold rounded px-3.5 py-1.5  hover-nav">
                            <NavLink
                                to={"/projects"}
                                className="link block pr-4 pl-3  rounded  text-center md:border-0  md:p-0 text-black-400 md:hover:text-black hover:bg-transparent hover:text-black "
                                aria-current="page"
                            >
                                Projets
                            </NavLink>
                        </li>
                        <li onClick={handleHiddenClick} className="font-semibold rounded px-3.5 py-1.5 hover-nav">
                            <NavLink
                                to={"/skills"}
                                className="link block pr-4 pl-3  rounded   md:border-0  md:p-0 text-black-400 md:hover:text-black hover:bg-transparent hover:text-black "
                            >
                                Compétences/CV
                            </NavLink>
                        </li>
                        <li onClick={handleHiddenClick} className="contact">
                            <NavLink
                                to={"/contact"}
                                className="link block  rounded md:border-0  md:p-0 text-black-400 md:hover:text-black hover:bg-transparent hover:text-black "
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
