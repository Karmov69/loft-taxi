import React, { Component } from "react";
import "./index.css";

class MainLayout extends Component {
  state = {
    isFromLogin: true,
  };

  changeForm(event) {
    event.preventDefault();
    this.setState({ isFromLogin: !this.state.isFromLogin });
  }

  render() {
    return (
      <div className="regLayout">
        {this.state.isFromLogin ? (
          <form className="form">
            <input type="email" placeholder="email"></input>
            <input type="password" placeholder="password"></input>
            <button type="button" onClick={this.props.doAuth}>
              Войти
            </button>
            <a href="/" onClick={this.changeForm.bind(this)}>
              Регистрация
            </a>
          </form>
        ) : (
          <form className="form">
            <input type="name" placeholder="name"></input>
            <input type="email" placeholder="email"></input>
            <input type="password" placeholder="password"></input>
            <button type="button" onClick={this.props.doAuth}>
              Зарегистрироваться
            </button>
            <a href="/" onClick={this.changeForm.bind(this)}>
              У меня уже есть аккаунт
            </a>
          </form>
        )}
      </div>
    );
  }
}

export default MainLayout;
