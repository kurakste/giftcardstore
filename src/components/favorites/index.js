import React, { Component, Fragment } from 'react';
//=================================================
import Prodcard from '../catalog/prodcard';
import { connect } from 'react-redux';

class Favorites extends Component {

    constructor(props) {
        super(props);

    }

    render() {
                                         
        const { favorites } = this.props;
        console.log(`props from constructor: ${ favorites } `);
        // const { favorites } = this.proops;
        const cat = favorites.map( item => <Prodcard key = { item.id } product = { item } /> );
    
        return (
            <Fragment>
                {cat}
            </Fragment>
        );
    }
}
const mapStateToProps = function(state) {
    const { favorites } = state;
    console.log(favorites);
    return { favorites: favorites };
};

const connected = connect(mapStateToProps)(Favorites);
export default connected;
