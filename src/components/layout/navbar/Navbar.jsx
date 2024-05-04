import "../navbar/Navbar.css";
import CartWidget from "../../common/cartWidget/CartWidget.jsx";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="containerNavbar">
        <img
          to="/"
          src="https://res.cloudinary.com/dwj4jcs0g/image/upload/v1714145163/nailsby.breik_hjr0qd.png"
          alt="LOGO NAILS BY BREIK"
        />

        <ul className="categories">
          <li to="/category/geles">Geles</li>
          <li to="/category/manicuria">Manicuría</li>
          <li to="/category/decoracion">Decoración</li>
        </ul>
        <CartWidget />
        <Link></Link>
      </div>
    </>
  );
};

export default Navbar;
