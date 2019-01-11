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
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { addToFavorite } from '../../actions';


const styles = theme => ({
    card: {
        margin: 5,
        maxWidth: 350,
        width: '100%',
        float: 'left',
    },
    media: {
        paddingTop: '100%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
});

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
    }

    render() {
        const { classes, product } = this.props;

        return (
            <Card className={classes.card}>
                <CardHeader
                    action={
                        <IconButton>
                            <FontAwesomeIcon icon={faShoppingCart} size="sm"/>
                        </IconButton>
                    }
                    title={product.name}
                    subheader={ (!product.material) ? 'СЕРТИФИКАТ' : 'ТОВАР' }
                />
                <CardMedia
                    className={classes.media}
                    image={ product.image }
                    title="Paella dish"
                />
                <CardContent>
                    <Typography component="p">
                        { product.short_description }
                    </Typography>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                    <IconButton  aria-label="Add to favorites">
                        <FavoriteIcon onClick={this.handleFavoriteClick}/>
                    </IconButton>
                    <IconButton aria-label="Share">
                        <ShareIcon />
                    </IconButton>
                    <IconButton
                        className={classnames(classes.expand, {
                            [classes.expandOpen]: this.state.expanded,
                        })}
                        onClick={this.handleExpandClick}
                        aria-expanded={this.state.expanded}
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

export default withStyles(styles)(connected) ;
