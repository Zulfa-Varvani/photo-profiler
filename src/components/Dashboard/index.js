import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";

const Dashboard = () => {
    let navigate = useNavigate();

    return (
        <div>Hi! 
            <br/>
            <Button
                type="submit"
                variant="contained"
                style={{backgroundColor: "#2EB5E0"}}
                //onClick={logout}
                >
                Logout
            </Button>
        </div>
    );
}

export default Dashboard;