import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";

DeleteItem.propTypes = {
  pizzaId: PropTypes.number,
};

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  function handleDelete() {
    return dispatch(deleteItem(pizzaId));
  }

  return (
    <Button type="small" onClick={() => handleDelete()}>
      Delete
    </Button>
  );
}

export default DeleteItem;
