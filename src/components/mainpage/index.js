import React, { Component, Fragment } from 'react';
//=================================================
import Certcardblock from './Certcardblock';
import Consumers from './Consumers';
import Partners from './Partners';

class MainPage extends Component {

  render() {
    
    return (
      <Fragment>
        <Certcardblock />
        <Consumers />
        <Partners />
      </Fragment>
    )
  }
}
export default MainPage;
