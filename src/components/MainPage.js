import React, { Component, Fragment } from 'react';
import TextMobileStepper from './mainpage/Steper';
import Certcardblock from './mainpage/Certcardblock';
import Consumers from './mainpage/Consumers';

class MainPage extends Component {

  render() {
    
    return (
      <Fragment>
        <Certcardblock />
        <Consumers />
      </Fragment>
    )
  }
}
export default MainPage;
