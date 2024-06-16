import { formatCurrency } from "../../helpers/helpers";
import DeleteItem from "./DeleteItem";

import PropTypes from "prop-types";

CartItem.propTypes = {
  item: PropTypes.shape({
    pizzaId: PropTypes.number,
    name: PropTypes.string,
    quantity: PropTypes.number,
    totalPrice: PropTypes.number,
  }),
};

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="font-bond text-sm">{formatCurrency(totalPrice)}</p>
        <DeleteItem />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
