import React, { Component } from "react";
import Header from "../../components/header";

class RegLayout extends Component {
  render() {
    return <Header doLogout={this.props.doLogout} />;
  }
}

export default RegLayout;
