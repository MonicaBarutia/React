import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    container: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    button: {
        margin: theme.spacing(1),
    },
    form: {
        marginTop: theme.spacing(1),
    },
}));

const App = () => {
    const classes = useStyles();

    return (

        <div className={classes.container}>
            <Typography component="h1" variant="h5">
                Login
            </Typography>
            <form className={classes.form} noValidate autoComplete="off">
                <TextField
                    variant="outlined"
                    id="standard-password-input"
                    label="E-mail"
                    className={classes.textField}
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    fullWidth
                />
                <TextField
                    variant="outlined"
                    id="standard-password-input"
                    label="Password"
                    className={classes.textField}
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    fullWidth
                />
                <Button variant="contained" color="primary" className={classes.button} fullWidth>
                    Login
                </Button>
            </form>
        </div>

    );
};

export default App;
