import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { CartContext } from "../../contexts/cart.content";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { UserContext } from "../../contexts/user.context";
import { ReactComponent as CrwnLogo } from "../../assests/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import "./layout.scss";

const Layout = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const handleSignOut = async () => {
    await signOutUser();
  };
  return (
    <Fragment>
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
          </div>
          <div className="header-navbar-shadow"></div>
          <main className="routes-wrapper">
            <Outlet />
          </main>
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;
