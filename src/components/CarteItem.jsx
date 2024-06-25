import React from "react";
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import cartSlice, { remove } from "../redux/Slices/CartSlice";

import toast from "react-hot-toast";

const CarteItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = (item) => {
    dispatch(remove(item.id));
    toast.success("Item removed successfully");
  };

  return (
    <div>
      <div>
        <div>
          <img src={CarteItem.title} alt="" />
        </div>
        <div>
          <h1>{item.title}</h1>
          <h1>{item.description}</h1>
        </div>
        <div>
          <p>{item.price}</p>
          <div onClick={removeFromCart}>
            <FcDeleteDatabase />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarteItem;
