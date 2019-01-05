import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'; 
import Layout from './components/Layout';
import MainPage from './components/MainPage';
import Catalog from './components/Catalog';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Layout>
            <Switch>
              <Route exact path='/' component ={ MainPage } />
              <Route exact path='/catalog' component = { Catalog } />
              <Route exact path='/cards' render={ () => { return (<div> Hi from cards </div>)}} />
              <Route exact path='/support' render={ () => { return (<div> Hi from support </div>)}} />
              <Route exact path='/feedback' render={ () => { return (<div> Hi from feedback </div>)}} />
              <Route exact path='/about' render={ () => { return (<div> Hi from about </div>)}} />
            </Switch>
          </Layout >
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
