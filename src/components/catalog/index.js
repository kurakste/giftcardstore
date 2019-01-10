import React, { Component, Fragment } from 'react';
import products from './itemsStub';
import Prodcard from './Prodcard';
import FilterDialog from './FilterDialog';

class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = {products: products};
  }
  
  render() {
    
    const cat = this.state.products.map( item => <Prodcard key = { item.id } product = { item } /> );
    
    return (
      <Fragment>
        {cat}
        <FilterDialog />
      </Fragment>
    );
  }
}
export default Catalog;
