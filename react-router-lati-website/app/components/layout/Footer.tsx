import { Link } from "react-router";
export default function Footer () {
    return (
        <footer className="footer footer-center p-10 bg-neutral text-neutral-content relative z-10">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 max-w-full">
            <Link to="#about" className="link link-hover">About</Link>
            <Link to="#research" className="link link-hover">Research</Link>
            <Link to="#projects" className="link link-hover">Projects</Link>
            <Link to="#team" className="link link-hover">Team</Link>
            <Link to="#contact" className="link link-hover">Contact</Link>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-sm">
              <span>SpatialLab</span>
              <span className="text-gray-400">·</span>
              <span>R&D Lab at</span>
              <a 
                href="https://ucenfotec.ac.cr/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center hover:opacity-80 transition-opacity"
              >
                <img 
                  src="/images/cenfotec-white.png" 
                  alt="CENFOTEC" 
                  className="h-7 w-auto"
                />
              </a>
            </div>
          </div>

          <div>
            <p>&copy; 2024 SpatialLab All rights reserved.</p>
          </div>
        </footer>
    );
} 
