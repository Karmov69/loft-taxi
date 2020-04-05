import React, { Component } from "react";
import MapPage from "../../pages/Map";
import ProfilePage from "../../pages/Profile";
import "./header.css";

const PAGES = {
  map: (
    <>
      <MapPage />
    </>
  ),
  profile: (
    <>
      <ProfilePage />
    </>
  ),
};

class Header extends Component {
  state = { currentPage: "map" };

  navigateTo(currentPage) {
    this.setState({ currentPage });
  }

  render() {
    return (
      <>
        <header className="header">
          <nav>
            <button onClick={this.navigateTo.bind(this, "map")}>Карта</button>
            <button onClick={this.navigateTo.bind(this, "profile")}>
              Профиль
            </button>
            <button onClick={this.props.doLogout}>Выйти</button>
          </nav>
        </header>
        <div>{PAGES[this.state.currentPage]}</div>
      </>
    );
  }
}

export default Header;
