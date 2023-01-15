import { Fragment, useContext, useState } from "react";
// import { useTranslation } from "react-i18next";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.content";

import { ThemeContext } from "../../contexts/theme-context";
import { UserCheck, ShoppingBag, Menu, Sun, Moon, Heart } from "react-feather";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { UserContext } from "../../contexts/user.context";
import CartDropdownn from "../../components/cart-dropdown/cart-dropdown.component";

import "./layout.scss";
import MobileSidebar from "../../components/MobileSidebar/indej";
import IntLDropdown from "./IntlDropDown";
import CartIcon from "../../components/cart-icon/cart-icon.component";

const Layout = () => {
  // const { t } = useTranslation();
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const { theme, setTheme } = useContext(ThemeContext);

  const navigate = useNavigate();

  const [showSidebar, setShowSidebar] = useState(false);

  const gotoAuth = () => {
    navigate("/login");
  };

  const handleThemeChange = () => {
    const isCurrentDark = theme === "dark";
    setTheme(isCurrentDark ? "light" : "dark");
    localStorage.setItem("default-theme", isCurrentDark ? "light" : "dark");
  };
  const toggleSidebar = () => setShowSidebar((prevState) => !prevState);

  const handleSignOut = async () => {
    await signOutUser();
  };
  return (
    <Fragment>
      <div className="wrapper">
        <div className="main-menu">
          <Link className="logo-container" to="/">
            <h3>Myk</h3>
          </Link>
          <div className="nav-links-container">
            <Link className="nav-link" to="shop">
              <ShoppingBag className="nav-icon" />
              <span>shop</span>
            </Link>
            <Link className="nav-link" to="shop">
              <Heart className="nav-icon" />
              <span>wishlist</span>
            </Link>
            {currentUser ? (
              <div className="nav-link" onClick={handleSignOut}>
                <UserCheck className="nav-icon" />
                <span>Log out</span>
              </div>
            ) : (
              <div className="nav-link" onClick={gotoAuth}>
                <UserCheck className="nav-icon" />
                <span>Sign in</span>
              </div>
            )}
            {/* <CartIcon /> */}
          </div>
        </div>
        <div className="content">
          <div className="navbar">
            <Menu onClick={toggleSidebar} className="header-menu-toggler" />
            <div className="header-right-side">
              <IntLDropdown />
              <CartIcon />
              <div className="toggle-btn-section">
                {theme === "light" ? (
                  <Sun className="light-icon" onClick={handleThemeChange} />
                ) : (
                  <Moon className="dark-icon" onClick={handleThemeChange} />
                )}
              </div>
            </div>
          </div>
          <div className="header-navbar-shadow"></div>
          <div className="routes-wrapper">
            {/* <h1>{t("Welcome")}</h1> */}
            <Outlet />
          </div>
        </div>
      </div>
      <div className="">{isCartOpen && <CartDropdownn />}</div>
      <MobileSidebar show={showSidebar} onClose={toggleSidebar} />
    </Fragment>
  );
};

export default Layout;
