import { useRef, useState } from "react";
import "./Navbar.css";
import navbarUnderline from "/src/assets/download.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
function Navbar() {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <img
        className="h-12"
        src="https://i.ibb.co.com/VTvrq08/Name-Logo.png"
        alt=""
      />
      <i
        id="open-menu"
        onClick={openMenu}
        className="fa-solid fa-bars-staggered"
      ></i>
      <ul ref={menuRef} className="nav-menu">
        <i
          id="close-menu"
          onClick={closeMenu}
          className="fa-solid fa-xmark"
        ></i>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={navbarUnderline} /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" ? <img src={navbarUnderline} /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => setMenu("services")}>Services</p>
          </AnchorLink>
          {menu === "services" ? <img src={navbarUnderline} /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => setMenu("work")}>Portfolio</p>
          </AnchorLink>
          {menu === "work" ? <img src={navbarUnderline} /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <img src={navbarUnderline} /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
}

export default Navbar;
