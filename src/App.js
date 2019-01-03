import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'; 
import Layout from './components/Layout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Layout>
            <Switch>
              <Route exact path='/' render={ () => { return (<div> Hi from root </div>)}} />
              <Route exact path='/about' render={ () => { return (<div> Hi from about </div>)}} />
              <Route exact path='/catalog' render={ () => { return (<div> Hi from catalog </div>)}} />
            
            </Switch>
          </Layout >
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
