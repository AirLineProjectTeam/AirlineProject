import Logo from "./assets/LOGO.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../sharedComponents/contextProvider";

const Header = () => {
  const [currentUser,setUser]=useContext(Context).user;
  const [highlighted, setHighlight] = useState("Home");
  const navigate = useNavigate();
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-8 w-8" />
          <span className="ml-2 text-xl font-bold text-gray-800">Base</span>
        </div>
        <nav className="flex items-center space-x-10">
          <Link
            to="/"
            className={highlighted == "Home" ? "text-red-500" : "text-gray-600"}
            onClick={() => setHighlight("Home")}
          >
            Home
          </Link>
          <Link
            to="/Flights"
            className={
              highlighted == "Flights" ? "text-red-500" : "text-gray-600"
            }
            onClick={() => setHighlight("Flights")}
          >
            Flights
          </Link>

          <Link
            to="/Support"
            className={
              highlighted == "Support" ? "text-red-500" : "text-gray-600"
            }
            onClick={() => setHighlight("Support")}
          >
            Support
          </Link>
          
        </nav>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => {
              navigate("/Login");
            }}
            className="text-gray-600"
          >
            Sign In
          </button>
          <button
            onClick={() => {
              navigate("/Signup");
            }}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
