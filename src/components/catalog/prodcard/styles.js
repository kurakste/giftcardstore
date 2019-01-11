import red from '@material-ui/core/colors/red';
export const styles = theme => ({
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