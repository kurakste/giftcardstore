import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'; 
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
//======================================
import App from '../App';
import reducer from '../reducers';
import Prodcard from '../components/catalog/prodcard';
import { ExpansionPanelActions } from '@material-ui/core';

Enzyme.configure({ adapter: new Adapter() });

const store = createStore(
    reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__ ()
);

it('should exist', () => {
    const pc = shallow(<Prodcard />);
});
 
it('renders without crashing', () => {

    const div = document.createElement('div');
    ReactDOM.render(
        <Provider store = {store} >
            <App /> 
        </Provider>, div);
    ReactDOM.unmountComponentAtNode(div);

});
