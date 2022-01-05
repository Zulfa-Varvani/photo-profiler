import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useAuth, logout } from "../config";

const Dashboard = () => {
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
        <div>Hi! {user?.displayName}
            <br/>
            <Button
                type="submit"
                variant="contained"
                style={{backgroundColor: "#2EB5E0"}}
                onClick={handleLogout}
                >
                Logout
            </Button>
        </div>
    );
}

export default Dashboard;