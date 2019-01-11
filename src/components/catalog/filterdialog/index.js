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
import CitySelector from './cityselector';
import Cat1selector from './cat1selector';
import Cat2selector from './cat2selector';
import { styles } from './styles';


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

