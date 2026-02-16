import React, { useEffect, useState } from "react";
import MenuButton from "./MenuButton";
import logo from "../../assets/icons/logo.svg";
import MenuHamburger from "./MenuHamburger";
import MobileMenuBlur from "./MobileMenuBlur";
import "./Header.css";
import { CSSTransition } from "react-transition-group";
import disableScroll from "disable-scroll";
import { navigationItems } from "../../data/navigationItems";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (toggle) {
      disableScroll.on();
    } else {
      disableScroll.off();
    }

    return () => {
      disableScroll.off();
    };
  }, [toggle]);

  const mobileMenuHandler = (sectionId, event) => {
    event.preventDefault();
    setToggle(false);

    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 80);
  };

  const renderButtons = (isMobile = false) =>
    navigationItems.map((item) => {
      const isSectionItem = item.type === "section";

      const menuButtonProps = {
        key: `${isMobile ? "mobile" : "desktop"}-${item.label}`,
        text: item.label,
        link_src: isMobile && isSectionItem ? "#" : item.href,
        className: isMobile ? "MobileMenuButton" : "MenuButton",
        target: isSectionItem ? "_self" : "_blank",
      };

      if (isMobile && isSectionItem) {
        menuButtonProps.onClick = (event) => mobileMenuHandler(item.sectionId, event);
      }

      return <MenuButton {...menuButtonProps} />;
    });

  const boxStyle = { backgroundColor: toggle ? "#4717f6" : "#00000070" };

  return (
    <div>
      <div className="MenuBox" style={boxStyle}>
        <img
          className="logo"
          src={logo}
          style={{ filter: "invert(1)" }}
          alt="error"
        />

        {renderButtons(false)}
        <MenuHamburger onClick={() => setToggle(!toggle)} isChecked={toggle} />
      </div>

      <CSSTransition
        in={toggle}
        timeout={500}
        unmountOnExit
        classNames="MobileMenu"
      >
        <div className="MobileMenu">
          <div className="MobileMenuItems">{renderButtons(true)}</div>
        </div>
      </CSSTransition>

      <CSSTransition
        in={toggle}
        timeout={500}
        unmountOnExit
        classNames="MobileMenuBlur"
      >
        <MobileMenuBlur
          onClick={() => {
            setToggle(false);
          }}
        />
      </CSSTransition>
    </div>
  );
};

export default Header;
