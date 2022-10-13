import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { UserContext } from "../../contexts/user.context";
import { ReactComponent as CrwnLogo } from "../../assests/crown.svg";

import "./navigation.component.scss";

const Navigation = () => {
  const { currentUser} = useContext(UserContext);

  const handleSignOut = async() =>{
   await signOutUser()
  }
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={handleSignOut}>SIGN OUT</span>
          ) : (
            <Link className="nav-link" to="auth">
              SIGN-IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
