import logo from "../assets/code enclave logo.png";
import {FaGithub} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {FaLinkedin} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="ml-0 flex flex-shrink-0 items-center"> 
        <img className="mx-2 w-40" src={logo} alt="logo" />
      </div>
      <div className="m-10 flex items-center justify-center gap-4 text-2xl">
        <FaGithub />
        <FaSquareXTwitter />
        <FaLinkedin />
        <FaInstagram />
      </div>
    </nav>
  );
};

export default Navbar;