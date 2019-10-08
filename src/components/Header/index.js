import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./index.scss";

class Header extends Component {
  
  onStartAgain() {
    window.location.href ="/";
  }

  render() {
    return (
      <header className="header">
        <div className="header-cover">
        <div className="header__logo">
            <div onClick={e => this.onStartAgain()}>
              <span>on</span>
              <span>Click</span>
            </div>
          </div>
          <div className="header__menu">
            <div className="menu__item">
             <Link to="/contributions">Вклады</Link>
            </div>
            <div className="menu__item">
             <Link to="/credit-services">Кредиты</Link>
            </div>
            <div className="menu__item">
             <Link to="/also">Еще</Link>
            </div>
          </div>
          <div className="profile">
            <img src="/user-solid.svg" alt="profile" />
          </div>
        </div>
      </header>)
  }
}

export default Header;