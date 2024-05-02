import "../navbar/Navbar.css";
import CartWidget from "../../common/cartWidget/CartWidget.jsx";
const Navbar = ({ children }) => {
  return (
    <>
      <div className="containerNavbar">
        <img
          src="https://res.cloudinary.com/dwj4jcs0g/image/upload/v1714145163/nailsby.breik_hjr0qd.png"
          alt="LOGO NAILS BY BREIK"
        />
        <ul className="categories">
          <li>Geles</li>
          <li>Manicuría</li>
          <li>Decoración</li>
        </ul>
        <CartWidget />
        {children}
      </div>
    </>
  );
};

export default Navbar;
