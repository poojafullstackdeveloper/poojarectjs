import React from "react";
import "./Header.css";
import Cart from "./Cart";

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="logo">
          <h1>Amazon</h1>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search products..." />
          <button>Search</button>
        </div>

        {/* Pass cartCount as a prop to Cart */}
        <Cart cartCount={this.props.cartCount} />
      </header>
    );
  }
}
