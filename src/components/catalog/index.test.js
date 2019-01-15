import React from 'react';
import Catalog from '../catalog';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ExpansionPanelActions } from '@material-ui/core';
import products from '../../mocks/testItemsForCatalog2';

Enzyme.configure({ adapter: new Adapter() });
describe('Prodcard component', () => {
    it('render one Filter Dialog', () => {
        const cat = shallow(<Catalog />);
        expect(cat.find('WithStyles(FilterDialog)')).toHaveLength(1);   
    });
    
    it('render five Filter Dialog', () => {
        const cat = shallow(<Catalog />);
        cat.setState({ products: products });
        expect(cat.find('WithStyles(Connect(Prodcard))')).toHaveLength(5);   
    });
});