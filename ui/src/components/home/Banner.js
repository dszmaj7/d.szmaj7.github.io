import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./styles/banner.scss";

const Banner = () => {
  const [active, setActive] = useState("ABOUT");

  return (
    <div className='banner'>
      <div className='banner__header'>
        <span className='banner__brand'>MoGo</span>
        <ul className='banner__menu'>
          <li className={`banner__menu-item ${active === "ABOUT" ? "banner__menu-item--active" : ""}`} onClick={() => setActive("ABOUT")}>
            <span>ABOUT</span>
          </li>
          <li className={`banner__menu-item ${active === "SERVICE" ? "banner__menu-item--active" : ""}`} onClick={() => setActive("SERVICE")}>
            <span>SERVICE</span>
          </li>
          <li className={`banner__menu-item ${active === "WORK" ? "banner__menu-item--active" : ""}`} onClick={() => setActive("WORK")}>
            <span>WORK</span>
          </li>
          <li className={`banner__menu-item ${active === "BLOG" ? "banner__menu-item--active" : ""}`} onClick={() => setActive("BLOG")}>
            <span>BLOG</span>
          </li>
          <li className={`banner__menu-item ${active === "CONTACT" ? "banner__menu-item--active" : ""}`} onClick={() => setActive("CONTACT")}>
            <span>CONTACT</span>
          </li>
          <li className={`banner__menu-item ${active === "CART" ? "banner__menu-item--active" : ""}`} onClick={() => setActive("CART")}>
            <span>
              <FontAwesomeIcon icon={faCartShopping} />
            </span>
          </li>
          <li className={`banner__menu-item ${active === "SEARCH" ? "banner__menu-item--active" : ""}`} onClick={() => setActive("SEARCH")}>
            <span>
              {" "}
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </li>
        </ul>
      </div>
      <div className='banner__creative'>Creative Template</div>
      <div className='banner__welcome'>
        <p>WELCOME</p>
        <p>TO MOGO</p>
      </div>
      <button className='banner__learn'>Learn more</button>
      <span className='banner__eagle' />
    </div>
  );
};

export default Banner;
