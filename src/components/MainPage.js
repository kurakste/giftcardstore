import React, { Component, Fragment } from 'react';
import Certcardblock from './mainpage/Certcardblock';
import Consumers from './mainpage/Consumers';
import Partners from './mainpage/Partners';

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
