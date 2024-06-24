import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added successfully");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.success("Item removed successfully");
  };

  return (
    <>
      <div>
        <div>
          <p>{post.title}</p>
        </div>
        <div>
          <p>{post.description}</p>
        </div>
        <div>
          <img src={post.image} alt="" />
        </div>
        <div>
          <p>{post.price}</p>
        </div>

        {cart.some((p) => p.id === post.id) ? (
          <button onClick={removeFromCart}>Remove Item</button>
        ) : (
          <button onClick={adToCart}>Add to Cart</button>
        )}
      </div>
    </>
  );
};

export default Product;
