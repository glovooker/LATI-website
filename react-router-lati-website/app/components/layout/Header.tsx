import { Link } from "react-router";

export default function Header () {
    return (
        <div className="navbar bg-base-100/90 backdrop-blur-sm border-b border-base-300 fixed top-0 left-0 right-0 z-50">
            <div className="navbar-start">
                <Link to="/" className="btn btn-ghost text-xl font-bold">
                    LATI Lab
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="#about" className="link link-hover">About</Link></li>
                    <li><Link to="#research" className="link link-hover">Research</Link></li>
                    <li><Link to="#projects" className="link link-hover">Projects</Link></li>
                    <li><Link to="#team" className="link link-hover">Team</Link></li>
                    <li><Link to="#contact" className="link link-hover">Contact</Link></li>
                </ul>
            </div>

            <div className="navbar-end">
                <div className="dropdown">
                    <div tabIndex={ 0 } role="button" className="btn btn-ghost lg:hidden">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
                    <ul tabIndex={ 0 } className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="#about">About</Link></li>
                        <li><Link to="#research">Research</Link></li>
                        <li><Link to="#projects">Projects</Link></li>
                        <li><Link to="#team">Team</Link></li>
                        <li><Link to="#contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
} 
