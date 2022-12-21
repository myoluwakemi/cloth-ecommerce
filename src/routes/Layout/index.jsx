import {  useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { CartContext } from "../../contexts/cart.content";

import { ThemeContext } from "../../contexts/theme-context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { UserContext } from "../../contexts/user.context";
import { ReactComponent as CrwnLogo } from "../../assests/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import "./layout.scss";

const Layout = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = () => {
    const isCurrentDark = theme === "dark";
    setTheme(isCurrentDark ? "light" : "dark");
    localStorage.setItem("default-theme", isCurrentDark ? "light" : "dark");
  };

  const handleSignOut = async () => {
    await signOutUser();
  };
  return (
    <div className="wrapper">
      <div className="sidebar">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={handleSignOut}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="auth">
              SIGN-IN
            </Link>
          )}
          <CartIcon />
        </div>
      </div>
      <div className="content">
        <div className="navbar">
          <div className="navigation">{isCartOpen && <CartDropdown />}</div>
          <div className="toggle-btn-section">
            <div className={`toggle-checkbox m-vertical-auto`}>
              <input
                className="toggle-btn__input"
                type="checkbox"
                name="checkbox"
                onChange={handleThemeChange}
                checked={theme === "light"}
              />
              <button
                type="button"
                className={`toggle-btn__input-label`}
                onClick={handleThemeChange}
              ></button>
            </div>
          </div>
        </div>
        <div className="header-navbar-shadow"></div>
        <main className="routes-wrapper">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
