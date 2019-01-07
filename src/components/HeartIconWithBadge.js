import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


const styles = theme => ({
  badge: {
    top: -20,
    right: -15,
    // The border color match the background color.
    border: `2px solid ${
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]
    }`,
  },
});

function FavoriteIconWithBadge(props) {
  const { classes } = props;

  return (
    <IconButton 
      aria-label="Fav" 
      color = 'inherit'
      style = {{ 
        position: 'absolute',
        top: 5,
        right: 10
      }}  
    >

      <FontAwesomeIcon icon={ faHeart } size="sm"/>
      <Badge badgeContent={4} color="primary" classes={{ badge: classes.badge }}>
      </Badge>
    </IconButton>
  );
}

FavoriteIconWithBadge.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FavoriteIconWithBadge);
