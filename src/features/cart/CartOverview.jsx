import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartQuantity, getTotalPrice } from "./cartSlice";

function CartOverview() {
  //  const totalPrice = useSelector((state) =>
  //   state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0),
  // );
  // const totalCartQuantity = useSelector((state) =>
  //   state.cart.cart.reduce((sum, item) => sum + item.quantity, 0),
  // );

  // we have created a common utility function in cartSLice to reuse it
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalPrice = useSelector(getTotalPrice);

  if (!totalCartQuantity) return null;

  return (
    <div
      className="usppercase flex items-center justify-between bg-stone-800 px-4 py-4 text-sm
        text-stone-200 sm:px-6 md:text-base"
    >
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalCartQuantity || 0} pizzas</span>
        <span>${totalPrice || 0}</span>
      </p>
      <Link to="/cart" className="tracking-widest">
        Open cart &rarr;
      </Link>
    </div>
  );
}

export default CartOverview;
