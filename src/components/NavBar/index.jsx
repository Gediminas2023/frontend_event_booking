import { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import ThemeToggle from "../ThemeToggle";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <header className="text-lg">
      <nav className={show ? "open" : ""}>
        <div className="container">
          <div className="logo">
            <img src={logo} alt="" />
          </div>

          <div className="links">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>

              <li>
                <Link to="/portfolios">Portfolio</Link>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link href="/calendar" className="active">
                  Book now
                </Link>
              </li>
              <div className=" w-10 pl-4 flex justify-center items-center">
                <ThemeToggle />
              </div>
            </ul>
          </div>

          <div onClick={() => setShow(!show)} className="hamburger-menu">
            <div className="bar"></div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
