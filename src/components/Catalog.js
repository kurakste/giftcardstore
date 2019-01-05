import React, { Component, Fragment } from 'react';
import products from '../itemsStub';
import cities from '../citylist.js';
import Prodcard from './catalog/Prodcard';

class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = {products: products}
    console.log('====1:', this);
  }
  
  render() {
    const li = this.state.products.map(item => {
      return (<li key={item.id}>{item.name}</li>)
    });
    console.log('====2', li);
    
    const cat = this.state.products.map( item => <Prodcard product = { item } /> );
    
    return (
      <Fragment>
      {cat}
      </Fragment>
    )
  }
}
export default Catalog;
