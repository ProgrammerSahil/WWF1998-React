import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./styles/Header.css";
import logo from "../assets/wwfLogo.png";

function Header(){

    return(
        <header className="Header d-flex justify-content-between">
            <div className="Heading"><img src={logo} alt="WWF Logo" /><h2>World Wrestling Federation</h2></div>
            <ul className="d-inline-flex">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Roster</a></li>
                    <li><a href="/">Future Events</a></li>

            </ul>
        </header>
    );
}

export default Header;