import { Link } from "react-router-dom"
import "../styles/navbar.css";

const Navbar = () => {

    return (
        <>
        <header className="navibar">
            
            <Link to="/"><h1 className="nav-heading">Info-Board <sub>by Dhanasai</sub></h1></Link>
        </header>
        
    </>
     );
}

export default Navbar;