import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";

const IntLDropdown = () => {
  const { i18n } = useTranslation();

  const langObj = {
    en: "English",
    de: "German",
    fr: "French",
    pt: "Portuguese",
  };

  // function to switch language
  const handleLangUpdate = (e, lang) => {
    e.preventDefault();
    i18n.changeLanguage(lang);
  };

  return (
    <UncontrolledDropdown className="dropdown-language">
      <DropdownToggle
        href="/"
        tag="a"
        className="nav-link"
        onClick={(e) => e.preventDefault()}
      >
        <ReactCountryFlag
          svg
          alt={i18n.language}
          className="country-flag flag-icon"
          countryCode={i18n.language === "en" ? "us" : i18n.language}
        />
        <span className="selected-languaage">{langObj[i18n.language]}</span>
      </DropdownToggle>
      <DropdownMenu className="mt-0" end>
        <DropdownItem
          href="/"
          tag="a"
          onClick={(e) => handleLangUpdate(e, "en")}
        >
          <ReactCountryFlag className="country-flag" countryCode="us" svg />
          <span className="ms-1">English</span>
        </DropdownItem>
        <DropdownItem
          href="/"
          tag="a"
          onClick={(e) => handleLangUpdate(e, "fr")}
        >
          <ReactCountryFlag className="country-flag" countryCode="fr" svg />
          <span className="ms-1">French</span>
        </DropdownItem>
        <DropdownItem
          href="/"
          tag="a"
          onClick={(e) => handleLangUpdate(e, "de")}
        >
          <ReactCountryFlag className="country-flag" countryCode="de" svg />
          <span className="ms-1">German</span>
        </DropdownItem>
        <DropdownItem
          href="/"
          tag="a"
          onClick={(e) => handleLangUpdate(e, "pt")}
        >
          <ReactCountryFlag className="country-flag" countryCode="pt" svg />
          <span className="ms-1">Portuguese</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};
export default IntLDropdown;
