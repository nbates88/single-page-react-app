import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

export default class Layout extends React.Component {
  render() {
      <div>
      <h1>KillerNews.net</h1>
        {this.props.children}
        <Link to='archives'>archives</Link>
        <Link to='settings'>settings</Link>
      </div>
  }
}
