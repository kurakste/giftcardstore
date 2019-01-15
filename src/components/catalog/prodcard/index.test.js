import React from 'react';
import Prodcard from '../prodcard';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ExpansionPanelActions } from '@material-ui/core';
import products from '../../../mocks/testItemsForCatalog2';
import configureMockStore from 'redux-mock-store';
import { Provider } from "react-redux";

Enzyme.configure({ adapter: new Adapter() });


describe('Prodcard component', () => {
    
    const mockStore = configureMockStore();
    const store = mockStore({});
    it('Render product card', () => {
        const card = (
                <Prodcard product = { products[0] } />
        );  
        console.log(card);
        expect(card);   
    });
});