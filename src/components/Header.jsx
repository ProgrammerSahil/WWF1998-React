import "./styles/Header.css";
import logo from "../assets/wwfLogo.png";
import { Link } from "react-router-dom";

function Header(props){

    return(
        <header className="Header d-flex justify-content-between">
            <div className="Heading"><img src={logo} alt="WWF Logo" /><h2>World Wrestling Federation</h2></div>
            <ul className="d-inline-flex">
                    <li><Link to="/" className={props.at === 'home' ? 'active' : ''}>Home</Link></li>
                    <li><Link to="/Roster" className={props.at === 'roster' ? 'active' : ''}>Roster</Link></li>
                    <li><Link href="/" className={props.at === 'future-events' ? 'active' : ''}>Future Events</Link></li>
            </ul>
        </header>
    );
}

export default Header;