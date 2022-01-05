import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Paper, Typography} from "@material-ui/core";
import { useAuth, logout } from "../config";
import withStyles from "@material-ui/core/styles/withStyles"

const styles = theme => ({
    main: {
		width: 'auto',
		display: 'block',
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

const Dashboard = (props) => {
    const {classes} = props;
    let navigate = useNavigate();
    const user = useAuth();

    async function handleLogout() {
        try{
            await logout();
            navigate("/");
        } catch(err) {
            alert("error");
        }
    }

    return (

        <div className={classes.main}>
            <Paper elevation={6} className={classes.paper}>
                <Typography component="h1" variant="h5">Welcome {user?.displayName}</Typography>
                <Typography>
                    Choose files to upload to your profile with the button below! 
                    <br/>
                    Please ensure they are in PNG or JPEG format.
                </Typography>
                <br/>
                <input accept="image/*" type="file" id="select-img" style={{ display: "none" }}/>
                <label htmlFor="select-img">
                    <Button
                        variant="contained"
                        component="span"
                        style={{backgroundColor: "pink", borderRadius:40}}
                    >
                        Add Images
                    </Button>
                </label>
                <br/>
                <Button
                    variant="contained"
                    style={{backgroundColor: "#2EB5E0"}}
                    onClick={handleLogout}
                >
                    Logout
                </Button>
            </Paper>
        </div>
    );
}

export default withStyles(styles)(Dashboard);