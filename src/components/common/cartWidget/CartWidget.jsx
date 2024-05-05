import { Badge } from "@mui/material";
import { BsFillCartCheckFill } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to="/cart">
      <Badge badgeContent={0} showZero color="primary">
        <BsFillCartCheckFill size="30px" cclor="beige" />
      </Badge>
    </Link>
  );
};

export default CartWidget;
