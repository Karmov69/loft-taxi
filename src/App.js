import React, { Component } from "react";
import "./App.css";
import RegLayout from "./layouts/regLayout";
import MainLayout from "./layouts/mainLayout";

class App extends Component {
  constructor(props) {
    super(props);
    this.doAuth = this.doAuth.bind(this);
    this.state = {
      isAuthorized: false,
    };
  }

  doAuth() {
    this.setState({ isAuthorized: true });
  }

  doLogout() {
    this.setState({ isAuthorized: false });
  }

  render() {
    return (
      <>
        {this.state.isAuthorized ? (
          <MainLayout doLogout={this.doLogout.bind(this)} />
        ) : (
          <RegLayout doAuth={this.doAuth.bind(this)} />
        )}
      </>
    );
  }
}

export default App;
