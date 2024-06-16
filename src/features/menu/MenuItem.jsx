import { useDispatch, useSelector } from "react-redux";

import { addItem, getCurrentQuantityById } from "../cart/cartSlice.jsx";
import { formatCurrency } from "../../helpers/helpers";
import Buttton from "../../ui/Button";
import DeleteItem from "../cart/DeleteItem.jsx";

// eslint-disable-next-line react/prop-types
function MenuItem({ pizza }) {
  const dispatch = useDispatch();

  // eslint-disable-next-line react/prop-types
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const curretQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = curretQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24, ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-stone text-sm capitalize italic">
          {/* eslint-disable-next-line react/prop-types */}
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between text-sm">
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="font-medium uppercase text-stone-500">Sold out</p>
          )}
          {isInCart && <DeleteItem pizzaId={id} />}
          {!soldOut && !isInCart && (
            <Buttton type="small" onClick={() => handleAddToCart()}>
              Add To Cart
            </Buttton>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
