import "./styles/Footer.css";
import logo from "../assets/wwfLogo.png";

function Footer() {
  return (
    <footer className="footer d-flex justify-content-between">
      <h4>
        © <img src={logo} width="50" alt="WWF Logo" /> 1998
      </h4>
      <h5>Stamford, CT</h5>
    </footer>
  );
}

export default Footer;
