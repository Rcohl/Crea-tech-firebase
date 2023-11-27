import "./Header.css";
import React, { useEffect, useState } from "react";
import Logo from "../images/Logo_Crea_Tech/logo_blanc.png";
import BurgerMenu from "../images/ICON NAVBAR/Icon_Rose.png";

const Header = () => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          window.scrollY + window.innerHeight / 2 >= sectionTop &&
          window.scrollY + window.innerHeight / 2 < sectionTop + sectionHeight
        ) {
          setActiveSection(section.getAttribute("id"));
        }
      });

      if (window.scrollY > 0) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClassName = isHeaderFixed ? "navBar fixed-header" : "navBar";
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="NavBar">
      <nav className={headerClassName}>
        <a href="#accueil">
          <img src={Logo} alt="" className="logo" />
        </a>
        <div className="BurgerMenu">
          <img
            src={BurgerMenu}
            alt=""
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          />
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <div className="Nav-links">
            <ul>
              <li
                id="accueil_link"
                className={activeSection === "accueil" ? "active_burger" : ""}
              >
                <a
                  href="#accueil"
                  onClick={(e) => handleLinkClick(e, "accueil")}
                >
                  Accueil
                </a>
              </li>
              <li
                id="services_link"
                className={activeSection === "services" ? "active_burger" : ""}
              >
                <a
                  href="#services"
                  onClick={(e) => handleLinkClick(e, "services")}
                >
                  Services
                </a>
              </li>
              <li
                id="about_link"
                className={activeSection === "about" ? "active_burger" : ""}
              >
                <a href="#about" onClick={(e) => handleLinkClick(e, "about")}>
                  A Propos
                </a>
              </li>
              <li
                id="Avis_link"
                className={activeSection === "Avis" ? "active_burger" : ""}
              >
                <a href="#avis" onClick={(e) => handleLinkClick(e, "Avis")}>
                  Avis
                </a>
              </li>
              <li
                id="Contact_link"
                className={activeSection === "Contact" ? "active_burger" : ""}
              >
                <a
                  href="#Contact"
                  onClick={(e) => handleLinkClick(e, "Contact")}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </ul>
      </nav>
    </div>
  );
};

const handleLinkClick = (e, sectionId) => {
  e.preventDefault();
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth", block: "center" });
};

export default Header;
