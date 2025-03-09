

import React  from "react";
import Header from "../Amazon-project/Header";
import Pannel from "../Amazon-project/Pannel";
import Product from "./Product"

export default class Amazon extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      products: Product, // Changed key name to lowercase for consistency
      cartArray: [],
      total:0
    };
  }

  


  addToCart = (data) => {
    this.setState({ cartArray: [...this.state.cartArray, data] });
  };

  render() {
    return (
      <div className="App">
        <Header cartCount={this.state.cartArray.length} />
        <Pannel data={this.state.products} addToCart={this.addToCart} />
      </div>
    );
  }
}
