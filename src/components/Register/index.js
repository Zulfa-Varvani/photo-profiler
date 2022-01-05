import React from "react"
import { Paper, Avatar, Button, Typography, FormControl, Input, InputLabel } from "@material-ui/core"
import { LockOpen } from "@material-ui/icons"
import withStyles from "@material-ui/core/styles/withStyles"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

const styles = theme => ({
    main: {
		width: 'auto',
		display: 'block', // Fix IE 11 issue.
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
			width: 400,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
    },

    paper: {
		marginTop: theme.spacing.unit * 8,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
        backgroundColor: "#D4FFF7",
		padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },

    avatar: {
		margin: theme.spacing.unit,
		backgroundColor: "#00A8A8",
    },

    submit: {
        marginTop: theme.spacing.unit * 3,
        width: 300,
    }
})

const Register = (props) => {
    const {classes} = props;
    let navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <main className={classes.main}>
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOpen/>
                </Avatar>
                <Typography component="h1" variant="h5">Welcome to Profiler!</Typography>
                <Typography>Please fill in your information below.</Typography>
                <form className={classes.form} onSubmit={e => e.preventDefault() && false}>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="name">Name</InputLabel>
                        <Input id="name" name="name" placeholder="Bob Doe" autoFocus value={name} onChange={e => setName(e.target.value)}/>
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email">Email Address</InputLabel>
                        <Input id="email" name="email" placeholder="bob.doe@gmail.com" autoFocus value={email} onChange={e => setEmail(e.target.value)}/>
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input id="password" name="password" placeholder="Enter Password" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    </FormControl>
                </form>
                <Button
                    type="submit"
                    variant="contained"
                    style={{backgroundColor: "#2E8BC0"}}
                    //onClick={onRegister}
                    className={classes.submit}>
                    Register
                </Button>
                <Button
                    type="submit"
                    variant="contained"
                    style={{backgroundColor: "#2EB5E0"}}
                    component={Link}
                    to="/"
                    className={classes.submit}>
                    Go Back
                </Button>
            </Paper>
        </main>
    )
}

export default withStyles(styles)(Register);