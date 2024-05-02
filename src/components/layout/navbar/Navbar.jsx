import "../navbar/Navbar.css";
import CartWidget from "../../common/cartWidget/CartWidget.jsx";
const Navbar = ({ children }) => {
  return (
    <>
      <div className="containerNavbar">
        <h1>LOGO</h1>

        <ul>
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
