import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'; 
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFilter, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
//==========================================================================
import Layout from './components/layout';
import Mainpage from './components/mainpage';
import Catalog from './components/catalog';
import Favorites from './components/favorites';

library.add(faFilter,faShoppingCart );

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Layout>
                        <Switch>
                            <Route exact path='/' component ={ Mainpage } />
                            <Route exact 
                                path='/catalog' component = { Catalog } 
                            />
                            <Route exact 
                                path='/cards' 
                                render={ 
                                    () => { 
                                        return (<div> Hi from cards </div>); }
                                } 
                            /> 
                            <Route exact 
                                path='/support' 
                                render={ () => {
                                    return (<div> Hi from support </div>); }
                                } 
                            />
                            <Route exact 
                                path='/feedback' 
                                render={ () => { 
                                    return (<div> Hi from feedback </div>); }
                                } 
                            />
                            <Route 
                                exact 
                                path='/about' 
                                render={ () => {
                                    return (<div> Hi from about </div>); }
                                } 
                            />

                            <Route
                                exact
                                path='/favorites'
                                component = { Favorites }
                            />
                        </Switch>
                    </Layout >
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
