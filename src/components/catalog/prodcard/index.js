import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import CloseIcon from '@material-ui/icons/Close';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { addToFavorite, removeFromFavorite } from '../../../actions';
import { styles } from './styles';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom'; 

class Prodcard extends React.Component {

    constructor(props) {
        super(props);
        this.state = { expanded: false };

        this.handleExpandClick = () => {
            this.setState(state => ({ expanded: !state.expanded }));
        };

        this.handleFavoriteClick = () => {
            this.props.dispatch(addToFavorite(this.props.product));
        };

        this.handleRemoveFav = () => {
            console.log(`remove fav click ${this.props.product.id}`);
            this.props.dispatch(removeFromFavorite(this.props.product));
        }

    }

    render() {
        const { product, classes, location: { pathname }} = this.props;
        let crossIconButtonComponent = null;
        if (pathname === '/favorites') {
            crossIconButtonComponent= (
                <IconButton onClick = { this.handleRemoveFav } aria-label="Close">
                    <CloseIcon />
                </IconButton>
            );
        }
        return (
            <Card className={classes.card}>
                <CardHeader
                    action={
                        <IconButton>
                            <FontAwesomeIcon icon={faShoppingCart} size="sm"/>
                        </IconButton>
                    }
                    title={ product.name }
                    subheader={ (!product.material) ? 'СЕРТИФИКАТ' : 'ТОВАР' }
                />
                <CardMedia
                    className={ classes.media }
                    image={ product.image }
                    title="Paella dish"
                />
                <CardContent>
                    <Typography component="p">
                        { product.short_description }
                    </Typography>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                    <IconButton  onClick={ this.handleFavoriteClick } aria-label="Add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="Share">
                        <ShareIcon />
                    </IconButton>
                    { crossIconButtonComponent }
                    <IconButton
                        className={classnames(classes.expand, {
                            [classes.expandOpen]: this.state.expanded,
                        })}
                        onClick={ this.handleExpandClick }
                        aria-expanded={ this.state.expanded }
                        aria-label="Show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse 
                    in={this.state.expanded} 
                    timeout="auto" 
                    unmountOnExit
                >
                    <CardContent>
                        <Typography paragraph>
                            { product.description }
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        );
    }
}

Prodcard.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = function(state) {
    const { favorite } = state;
    return { state: favorite };
};


const mapDispatchToProps = (dispatch) => {
    return { dispatch };
};

const connected = connect(mapStateToProps, mapDispatchToProps)(Prodcard);

export default compose (
    withStyles(styles),
    withRouter
)(connected);