import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { Button, Paper, Typography} from "@material-ui/core";
import { useAuth, logout, storage, db } from "../config";
import withStyles from "@material-ui/core/styles/withStyles";
import { getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {addDoc, collection, serverTimestamp} from "firebase/firestore";
import Grid from "./Grid";

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
    const userName = user?.displayName?.split(" ")[0];
    const [file, setFile] = useState(null);
    const [error, setError] = useState("");
    const [url, setURL] = useState("");

    const handleUpload = (e) => {
        e.preventDefault();
        let selected = e.target.files[0];
        if(selected) {
            setFile(selected);
            setError("");
            uploadFile(selected);
        } else {
            setFile(null);
            setError("error")
        }
    }

    const uploadFile = (file) => {
        const storageRef = ref(storage, `${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on("state_changed", (snapshot) => {
            const prog = (snapshot.bytesTransferred / snapshot.totalBytes)*100;
            console.log(prog);
        }, (err) => {
            console.log(err);
        }, () => {
                getDownloadURL(uploadTask.snapshot.ref)
                .then(url => {
                    setURL(url);
                    addDoc(collection(db, "user-dashboard"), {
                        email: user?.email,
                        name: user?.displayName,
                        imgURL: url,
                        createdAt: serverTimestamp()
                    });
                })
            }
        );
    }

    async function handleLogout() {
        try{
            await logout();
            navigate("/");
            window.location.reload(true);
        } catch(err) {
            alert("error");
        }
    }

    return (
        <>
            <div className={classes.main}>
                <Paper elevation={6} className={classes.paper}>
                    <Typography component="h1" variant="h5">Welcome {userName}!</Typography>
                    <Typography>
                        Choose files to upload to your profile with the button below! 
                        <br/>
                        Please ensure they are in PNG or JPEG format.
                    </Typography>
                    <br/>
                    <input accept="image/*" type="file" id="select-img" style={{ display: "none" }} onChange={handleUpload}/>
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
            {console.log(user)}
            <Grid name={user?.displayName}/>
        </>
    );
}

export default withStyles(styles)(Dashboard);