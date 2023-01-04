import { Fragment, useContext, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.content";

import { ThemeContext } from "../../contexts/theme-context";
import { UserCheck, ShoppingBag } from "react-feather";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { UserContext } from "../../contexts/user.context";
import { ReactComponent as CrwnLogo } from "../../assests/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import "./layout.scss";
import MobileSidebar from "../../components/MobileSidebar/indej";

const Layout = () => {
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
            <CrwnLogo className="logo" />
          </Link>
          <div className="nav-links-container">
            <Link className="nav-link" to="shop">
              <ShoppingBag className="nav-icon" />
              <span>shop</span>
            </Link>
            {currentUser ? (
              <div className="nav-link" onClick={handleSignOut}>
                <UserCheck className="nav-icon" />
                <span>SIGN OUT</span>
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
            <div className="navigation">{isCartOpen && <CartDropdown />}</div>
            <button onClick={toggleSidebar}>d</button>
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
      <MobileSidebar show={showSidebar} onClose={toggleSidebar} />
    </Fragment>
  );
};

export default Layout;
