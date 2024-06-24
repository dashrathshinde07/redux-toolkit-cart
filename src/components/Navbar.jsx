import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-blue-500">
        <div className="flex flex-row justify-between">
          <NavLink to="/">
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPeN4d41CLrcQ0BrKvEMN4qHlZDu---qJ8Rw&s"
                alt=""
              />
            </div>
          </NavLink>

          <div>
            <NavLink to="/">
              <p>Home</p>
            </NavLink>

            <NavLink to="/cart">
              <div>
                <FaShoppingCart />
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
