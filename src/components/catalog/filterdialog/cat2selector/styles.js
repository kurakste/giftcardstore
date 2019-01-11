export const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        marginLeft: 0,
        width: '100%',
        margin: theme.spacing.unit,
        minWidth: 120,
        maxWidth: 500,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: theme.spacing.unit / 4,
    },
    noLabel: {
        marginTop: theme.spacing.unit * 3,
    },
});
