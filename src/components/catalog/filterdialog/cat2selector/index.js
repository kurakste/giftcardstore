import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { styles } from './styles';
import { names } from './names';

class Cat2selector extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: names[0],
        };
        this.handleChange = event => {
            this.setState({ name: event.target.value });
        };

        this.handleChangeMultiple = event => {
            const { options } = event.target;
            const value = [];
            for (let i = 0, l = options.length; i < l; i += 1) {
                if (options[i].selected) {
                    value.push(options[i].value);
                }
            }
            this.setState({
                name: value,
            });
        };
    }


    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <FormControl className={classes.formControl}>
                    <InputLabel shrink htmlFor="select-multiple-native">
            Стиль подарока:
                    </InputLabel>
                    <Select
                        multiple = {false}
                        native
                        value={this.state.name}
                        onChange={this.handleChangeMultiple}
                        inputProps={{
                            id: 'select-multiple-native',
                        }}
                    >
                        {names.map(name => (
                            <option key={name} value={name}>
                                {name}
                            </option>
                        ))}
                    </Select>
                </FormControl>
            </div>
        );
    }
}

Cat2selector.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Cat2selector);
