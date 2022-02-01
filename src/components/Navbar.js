import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import logo from "./images/euphorie.jpg";
import home from "./images/home.jpg";
import clients from "./images/clients.jpg";
import employers from "./images/employers.jpg";
import analytics from "./images/analytics.jpg";
import portrait from "./images/portrait.jpg";
function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      {/* <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar"></div>
        <div>
          <nav className"main-menu">
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <FaIcons.FaBars onClick={showSidebar} />
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </IconContext.Provider> */}

      <body>
        <div className="navbar">
          <input
            className={sidebar ? "searchBar onHover" : "searchBar"}
            type="text"
            placeholder="Поиск . . ."
          />
          <div className="accountContainer">
            <span className="accountText">Петрова О. П</span>
            <div className="accountPhoto">
              <img alt="accountlogo" src={portrait} className="accountLogo" />
            </div>
          </div>
        </div>
        {/* <div className="navbar filter">
          <span className={sidebar ? "filterText onFilterHover" : "filterText"}>
            Фильтр
          </span>
        </div> */}
        <nav
          class="main-menu"
          onMouseEnter={() => setSidebar(true)}
          onMouseLeave={() => setSidebar(false)}
        >
          <ul style={{ paddingLeft: 4 }}>
            <li>
              <a>
                <div class="fa fa-2x">
                  <img alt="logo" src={logo} className="imageLogo" />
                </div>
                <span class="nav-text">EUPHORIA</span>
              </a>
            </li>
            <li style={{ marginTop: "10px" }}>
              <a>
                <div class="fa fa-2x">
                  <img alt="logo" src={home} className="imageLogo" />
                </div>
                <span class="nav-text">Главная</span>
              </a>
            </li>
            <li>
              <a>
                <div class="fa fa-2x">
                  <img alt="logo" src={clients} className="imageLogo" />
                </div>
                <span class="nav-text">Клиенты</span>
              </a>
            </li>
            <li>
              <a>
                <div class="fa fa-2x">
                  <img alt="logo" src={employers} className="imageLogo" />
                </div>
                <span class="nav-text">Сотрудники</span>
              </a>
            </li>
            <li>
              <a>
                <div class="fa fa-2x">
                  <img alt="logo" src={analytics} className="imageLogo" />
                </div>
                <span class="nav-text">Аналитика</span>
              </a>
            </li>
          </ul>
          <ul class="logout">
            <li>
              <a href="#">
                <i class="fa fa-power-off fa-2x"></i>
                <span class="nav-text">Logout</span>
              </a>
            </li>
          </ul>
        </nav>
      </body>
    </>
  );
}

export default Navbar;
