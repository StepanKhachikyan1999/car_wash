// styles
import "./navbar.scss";

import React from "react";
import {useTranslation} from "react-i18next";
// custom imports

import homeBottomIcon from "../../images/homeBottomIcon.svg"
import ChangeLanguage from "./ChangeLanguage";
import Burger from "../responsiveNavbar/Burger";
import Menu from "../responsiveNavbar/Menu";
import {Link} from "react-router-dom";


const useOnClickOutside = (ref, handler) => {
  React.useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) return;
      handler(event);
    };
    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};


const Navbar = () => {

  const [open, setOpen] = React.useState(false);
  const {t} = useTranslation()
  const node = React.useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <div className="navbar">
      <div className="wrapper">
        <Link to="/">
        <div className="search">
          <img src={homeBottomIcon} alt="icon"/>
          <h4>{t("home")}</h4>
        </div>
        </Link>
        <div className="items">

          <div className="item">
            <div className="item_language">
              <ChangeLanguage />
            </div>

          </div>

          <div ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </div>
          {/*<div className="item">*/}
          {/*  <NotificationsNoneOutlinedIcon className="icon" />*/}
          {/*  <div className="counter">1</div>*/}
          {/*</div>*/}

        </div>
      </div>
    </div>
  );
};

export default Navbar;