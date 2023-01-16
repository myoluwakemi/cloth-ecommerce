import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { UserContext } from "../../contexts/user.context";
import { ReactComponent as CrwnLogo } from "../../assests/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { X, ShoppingBag, UserCheck, Heart } from "react-feather";
import "./styles.scss";

const MobileSidebar = ({ onClose, show }) => {
  const {t} = useTranslation()
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);
  const handleSignOut = () => {
    signOutUser();
  };
  const gotoAuth = () => {
    navigate("/login");
  };

  return (
    <div className={`mobile-sidebarwrapper ${show === true ? "active" : ""}`}>
      <div className="sidebar">
        <div className="sidebar-header">
          <Link onClick={onClose} className="logo-container" to="/">
            <CrwnLogo className="logo" />
          </Link>
          <X onClick={onClose} className="toggle-icon" />
        </div>

        <div>
          <div className="nav-links-container">
            <Link onClick={onClose} className="nav-link" to="shop">
              <ShoppingBag className="nav-icon" />
              <span>{t('shop')}</span>
            </Link>
            <Link onClick={onClose}  className="nav-link" to="shop">
              <Heart className="nav-icon" />
              <span>{t('wishlist')}</span>
            </Link>
            {currentUser ? (
              <div className="nav-link" onClick={handleSignOut}>
                <UserCheck className="nav-icon" />
                <span>{t('Logout')}</span>
              </div>
            ) : (
              <div className="nav-link" onClick={gotoAuth}>
                <UserCheck className="nav-icon" />
                <span>{t('Sign in')}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MobileSidebar;
