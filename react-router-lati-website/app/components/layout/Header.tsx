import { Link } from "react-router";

export default function Header() {
  return (
    <div className="navbar bg-white/90 backdrop-blur-sm border-b border-blue-200/50 fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost text-xl font-bold">
          <span className="text-gray-900">LATI </span>
          <span className="text-[#006AEA]">Lab</span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="#about" className="link link-hover text-gray-700 hover:text-[#006AEA] transition-colors">About</Link></li>
          <li><Link to="#research" className="link link-hover text-gray-700 hover:text-[#006AEA] transition-colors">Research</Link></li>
          <li><Link to="#projects" className="link link-hover text-gray-700 hover:text-[#006AEA] transition-colors">Projects</Link></li>
          <li><Link to="#team" className="link link-hover text-gray-700 hover:text-[#006AEA] transition-colors">Team</Link></li>
          <li><Link to="#contact" className="link link-hover text-gray-700 hover:text-[#006AEA] transition-colors">Contact</Link></li>
        </ul>
      </div>

      <div className="navbar-end">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52 border border-blue-200/50">
            <li><Link to="#about" className="text-gray-700 hover:text-[#006AEA]">About</Link></li>
            <li><Link to="#research" className="text-gray-700 hover:text-[#006AEA]">Research</Link></li>
            <li><Link to="#projects" className="text-gray-700 hover:text-[#006AEA]">Projects</Link></li>
            <li><Link to="#team" className="text-gray-700 hover:text-[#006AEA]">Team</Link></li>
            <li><Link to="#contact" className="text-gray-700 hover:text-[#006AEA]">Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
} 
