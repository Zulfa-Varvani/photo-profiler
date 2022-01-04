import React from "react"
import { Paper, Avatar, Button, Typography } from "@material-ui/core"
import { CameraAlt } from "@material-ui/icons"
import withStyles from "@material-ui/core/styles/withStyles"
import { Link } from "react-router-dom"

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
		padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },

    avatar: {
		margin: theme.spacing.unit,
		backgroundColor: "#00A8A8",
    },

    submit: {
        marginTop: theme.spacing.unit * 3,
    }
})

const Home = (props) => {
    const {classes} = props;

    return (
        <main className={classes.main}>
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <CameraAlt/>
                </Avatar>
                <Typography component="h1" variant="h5">Hello Guest!</Typography>
                <Typography>Choose an option.</Typography>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    style={{backgroundColor: "#8FDDE7"}}
                    component={Link}
                    to="/register"
                    className={classes.submit}>
                    Register
                </Button>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    style={{backgroundColor: "#2EB5E0"}}
                    component={Link}
                    to="/login"
                    className={classes.submit}>
                    Login
                </Button>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    style={{backgroundColor: "#1592B4"}}
                    component={Link}
                    to="/dashboard"
                    className={classes.submit}>
                    Dashboard
                </Button>
            </Paper>
        </main>
    )
}

export default withStyles(styles)(Home);