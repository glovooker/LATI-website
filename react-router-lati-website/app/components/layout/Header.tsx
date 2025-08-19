import { Link } from "react-router";

export default function Header() {
  return (
    <div className="navbar h-16 bg-white/90 backdrop-blur-sm border-b border-blue-200/50 fixed top-0 left-0 right-0 z-50 shadow-sm">
      {/* Wrapper centrado */}
      <div className="w-full max-w-screen-xl mx-auto px-4 flex items-center h-full">
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

        {/* Área derecha: altura del navbar y botón elegante */}
        <div className="navbar-end ml-auto flex items-stretch h-full">
          <div className="dropdown dropdown-end relative lg:hidden h-full">
            <button
              tabIndex={0}
              aria-label="Open menu"
              aria-haspopup="true"
              aria-expanded="false"
              className="
                h-full aspect-square -mr-4
                flex items-center justify-center
                bg-transparent text-[#006AEA]
                border-l border-blue-200/60
                hover:bg-[#006AEA]/10 active:bg-[#006AEA]/15
                rounded-none shadow-none
                outline-none focus-visible:ring-2 focus-visible:ring-[#006AEA]
                focus-visible:ring-offset-2 focus-visible:ring-offset-white
                transition
              "
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <ul
              tabIndex={0}
              className="
                menu menu-sm dropdown-content mt-0 top-full
                right-[-1rem] sm:right-0    /* Ignora el px-4 en mobile, normaliza en ≥sm */
                z-[60] p-2 shadow bg-white/95 backdrop-blur
                rounded-xl w-64 max-w-[90vw]
                border border-blue-200/50
              "
            >
              <li><Link to="#about" className="text-gray-700 hover:text-[#006AEA]">About</Link></li>
              <li><Link to="#research" className="text-gray-700 hover:text-[#006AEA]">Research</Link></li>
              <li><Link to="#projects" className="text-gray-700 hover:text-[#006AEA]">Projects</Link></li>
              <li><Link to="#team" className="text-gray-700 hover:text-[#006AEA]">Team</Link></li>
              <li><Link to="#contact" className="text-gray-700 hover:text-[#006AEA]">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
