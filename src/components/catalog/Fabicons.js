import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const styles = theme => ({
  fab_plus: {
    position: 'fixed',
    bottom: 10,
    right: '5%',
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

class Fabicons extends  Component {

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Fab color="primary" aria-label="Filter" className={classes.fab_plus}>
          <FontAwesomeIcon icon="filter" />
        </Fab>
      </div>
    );
  }
}

export default withStyles(styles)(Fabicons);
