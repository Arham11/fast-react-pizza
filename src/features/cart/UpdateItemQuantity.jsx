import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import {
  decreaseItem,
  getCurrentQuantityById,
  increaseItem,
} from "./cartSlice";
import PropTypes from "prop-types";

UpdateItemQuantity.propTypes = {
  pizzaId: PropTypes.number,
};

function UpdateItemQuantity({ pizzaId }) {
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type="round" onClick={() => dispatch(increaseItem(pizzaId))}>
        +
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button type="round" onClick={() => dispatch(decreaseItem(pizzaId))}>
        -
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
