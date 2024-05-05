import "../navbar/Navbar.css";
import CartWidget from "../../common/cartWidget/CartWidget.jsx";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="containerNavbar">
        <Link to="/">
          {" "}
          <img
            src="https://res.cloudinary.com/dwj4jcs0g/image/upload/v1714145163/nailsby.breik_hjr0qd.png"
            alt="LOGO NAILS BY BREIK"
          />
        </Link>

        <ul className="categories">
          <Link to="/category/geles">Geles</Link>
          <Link to="/category/manicuria">Manicuría</Link>
          <Link to="/category/decoracion">Decoración</Link>
        </ul>
        <CartWidget />

        <Link to="/cart">Ir al carrito</Link>
      </div>
    </>
  );
};

export default Navbar;
