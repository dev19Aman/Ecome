import React from "react";
import "./Header.css";
import { BsSearch } from "react-icons/bs";
import { BsBasket3Fill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import ProtectedRoute from "./Pages/ProtectedRoute";

const Header = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <NavLink to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </NavLink>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <BsSearch className="header__searchIcon" />
      </div>

      <div className="header__nav">
          <div className="header__option">
            <ProtectedRoute />
          </div>
          <NavLink to="/payment">

        <aside className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </aside>
</NavLink>
        <aside className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </aside>
        <NavLink to="/checkout">
          <div className="header__optionBasket">
            <BsBasket3Fill /> 
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
