import { Link } from "react-router";
export default function Footer () {
    return (
        <footer className="footer footer-center p-10 bg-neutral text-neutral-content">
  <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 max-w-full">
    <Link to="#about" className="link link-hover">About</Link>
    <Link to="#research" className="link link-hover">Research</Link>
    <Link to="#projects" className="link link-hover">Projects</Link>
    <Link to="#team" className="link link-hover">Team</Link>
    <Link to="#contact" className="link link-hover">Contact</Link>
  </div>

  <div>
    <p>&copy; 2024 LATI Lab. All rights reserved.</p>
  </div>
</footer>

    );
} 
