import React from "react";
import { useState, useEffect } from "react";
import config from "../config";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";

const Dashboard = () => {
    let navigate = useNavigate();

    if(!config.getCurrentUsername()) {
        alert("Please login first!");
        navigate("/login");
        return null;
    }

    console.log(config.getCurrentUsername());

    return (
        <div>Hi! {config.getCurrentUsername()}
            <br/>
            <Button
                type="submit"
                variant="contained"
                style={{backgroundColor: "#2EB5E0"}}
                onClick={logout}>
                Logout
            </Button>
        </div>
    );

    async function logout() {
        await config.logout();
        navigate("/");
    }
}

export default Dashboard;