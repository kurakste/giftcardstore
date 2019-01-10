import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import { withStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//-----------------------------------------------------------------
import CitySelector from './CitySelector';
import Cat1selector from './Cat1selector';
import Cat2selector from './Cat2selector';


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

class FilterDialog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };

    this.handleClickOpen = () => {
      this.setState({ open: true });
    };

    this.handleClose = () => {
      this.setState({ open: false });
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div>
          <Fab color="primary" aria-label="Filter" className={classes.fab_plus} onClick={this.handleClickOpen}>
            <FontAwesomeIcon icon="filter" />
          </Fab>
        </div>

        <Dialog
          fullWidth = { true }
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle style =  {{ textAlign: 'center' }} id="form-dialog-title">Фильтры</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Уточните город:
            </DialogContentText>
            <CitySelector />
            <Cat1selector />
            <Cat2selector />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Применить
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(FilterDialog);

