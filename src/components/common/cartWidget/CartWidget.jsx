import { Badge } from "@mui/material";
import { BsFillCartCheckFill } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";

const CartWidget = () => {
  return (
    <Badge badgeContent={0} showZero color="primary">
      <BsFillCartCheckFill size="30px" cclor="beige" />
    </Badge>
  );
};

export default CartWidget;
