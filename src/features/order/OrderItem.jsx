import { formatCurrency } from "../../helpers/helpers";

// isLoadingIngredients, ingredients
// eslint-disable-next-line react/prop-types
function OrderItem({ item }) {
  // eslint-disable-next-line react/prop-types
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
